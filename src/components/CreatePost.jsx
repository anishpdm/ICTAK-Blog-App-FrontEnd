import React from 'react'
import BlogHeader from './BlogHeader'
import ViewMyPost from './ViewMyPost'

const CreatePost = () => {
  return (
    <div>

        <BlogHeader />
        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12">
<div className="row g-3">

<div className="col-12 col-sm-12 col-md-12 col-lg-12">

<textarea name="" id="" cols="30" rows="5" className="form-control"></textarea>

</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12">
<button className="btn btn-warning"> Create a Post</button>
</div>

</div>
                    


                </div>
            </div>



<div className="row">
    <div className="col col-12 col-sm-12 col-md-12">


     
    </div>
</div>


        </div>
    </div>
  )
}

export default CreatePost