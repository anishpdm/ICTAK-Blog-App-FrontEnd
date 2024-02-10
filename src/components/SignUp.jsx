import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [input,setInput]=new useState(
        {
        "name":"",
        "dob":"",
        "phone":"",
        "email":"",
        "password":"",
    }
    )

    const inputHandler= (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }


    const readValue = ()=>{
        console.log(input)

        axios.post("http://localhost:8080/signup",input).then(
            (response)=>{
               console.log(response.data) 
             //  {"status":"success"}

             if (response.data.status=="success") {
                alert("Registered Succesfully")
                // page navigation
             } else {
                alert("invalid credentials")
             }


            }
        )
    }




  return (
    <div>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div class="card" >
  <div class="card-body">

    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label"> Name </label>
            <input name='name' value={input.name} onChange={inputHandler} type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label"> DOB </label>
<input type="date" name='dob' value={input.dob} onChange={inputHandler} className="form-control" />     
   </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label"> Phone </label>
            <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label"> E-mail Id </label>
            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label"> Password </label>
            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
        </div>
      
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <button onClick={readValue} className="btn btn-primary"> Register </button>
        </div>

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<Link to="/"> Back to Login </Link>

        </div>


    </div>
   
  </div>
</div>
                    


                </div>
            </div>
        </div>
        
        </div>
  )
}

export default SignUp