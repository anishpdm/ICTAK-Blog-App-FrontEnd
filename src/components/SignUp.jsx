import React from 'react'

const SignUp = () => {
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
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label"> DOB </label>
<input type="date" name="" id="" className="form-control" />     
   </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label"> Phone </label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label"> E-mail Id </label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label"> Password </label>
            <input type="password" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label"> Confirm Password </label>
            <input type="password" className="form-control" />
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <button className="btn btn-primary"> Register </button>
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