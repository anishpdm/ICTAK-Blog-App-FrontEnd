import React, { useEffect, useState } from 'react'
import BlogHeader from './BlogHeader'
import ViewMyPost from './ViewMyPost'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const nav=useNavigate()



  const [input,setInput]=useState(
    {

      "UserId": sessionStorage.getItem("userId"),
      "message":"",
      "token":sessionStorage.getItem("token")
    
    }
    
  )

  const readValues=()=>{
    console.log(input)
axios.post("http://localhost:8080/createPost",input).then(
  (response)=>{
    if (response.data.status=="success") {
      alert("Posted succesfully")
      
    } else {
      alert("something went wrong")

      
    }
  }
)


  }


  const inputHandler= (event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}


  return (
    <div>

        <BlogHeader />
        <br />

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12">
<div className="row g-3">

<div className="col-12 col-sm-12 col-md-12 col-lg-12">

<textarea name="message" value={input.message} onChange={inputHandler} cols="30" rows="5" className="form-control" ></textarea>

</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12">
<button onClick={readValues} className="btn btn-warning"> Create a Post</button>
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