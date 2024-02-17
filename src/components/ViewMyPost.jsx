import React, { useEffect, useState } from 'react'
import BlogHeader from './BlogHeader'
import axios from 'axios'

const ViewMyPost = () => {
  const [input,setInput]=useState(
    { "id": sessionStorage.getItem("userId"),
    "token":sessionStorage.getItem("token")
  })

  const [data,setData]=useState([])  

    const fetchData= ()=>{
      axios.post("http://localhost:8080/viewMyPost",input).then(
          (response)=>{
              console.log(response.data)
              setData(response.data)

          }
      )
  }


  useEffect( ()=>{fetchData()} ,[])

  return (


    <div>
        <BlogHeader />
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12">

            <div className="row g-3">

              {data.map(
                (value,index)=>{
                    return  <div className="col col-12 col-sm-12 col-md-12">


                    <div class="card mb-3" >
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/46/33/b7/caption.jpg?w=500&h=400&s=1" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> {value.name} </h5>
            <p class="card-text"> {value.message}</p>
            <p class="card-text"><small class="text-body-secondary">Posted from {value.email} </small></p>
          </div>
        </div>
      </div>
    </div>
    
                    </div>
                } 
              )}
           
            </div>


        </div>
    </div>
</div>

        
        
        </div>
  )
}

export default ViewMyPost