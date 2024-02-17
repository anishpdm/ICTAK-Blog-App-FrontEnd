
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate= useNavigate();

    const [input,setInput]=new useState(
        {
        "email":"",
        "password":""
    }
    )

    const inputHandler= (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue = ()=>{
        console.log(input)

        axios.post("http://localhost:8080/login",input).then(
            (response)=>{
               console.log(response.data) 
            

             if (response.data.status=="success") {
                console.log(response.data.userId)

                sessionStorage.setItem("userId",response.data.userId )
                sessionStorage.setItem("token",response.data.token )

                navigate("/create")

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
    <br />
    <h3> LogIn </h3>

    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label htmlFor="" className="form-label"> E-mail Id </label>
            <input onChange={inputHandler} type="text" className="form-control" name='email' value={input.email} />

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label htmlFor="" className="form-label"> Password</label>
            <input onChange={inputHandler} type="password" name="password" value={input.password} className="form-control" />

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button onClick={readValue} className="btn btn-success">LOGIN </button>
        </div>

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<Link to="/signup"> New Users Click Here </Link>

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

export default SignIn

