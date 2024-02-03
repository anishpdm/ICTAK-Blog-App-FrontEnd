
import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
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

            <label htmlFor="" className="form-label"> Username </label>
            <input type="text" className="form-control" />

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label htmlFor="" className="form-label"> Password</label>
            <input type="password" name="" id="" className="form-control" />

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-success">LOGIN </button>
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

