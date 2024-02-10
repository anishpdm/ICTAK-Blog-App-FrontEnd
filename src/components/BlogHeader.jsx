import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BlogHeader = () => {
  const nav=useNavigate()

  const LogOutAction=()=>{
    sessionStorage.clear()
    nav("/")
  }

  useEffect(
    ()=>{

      let uid=sessionStorage.getItem("userId")
      if(uid===null || uid===undefined)
      {
nav("/")
      }

    }
  )

  return (
    <div>

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blog App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/create">Home</Link>
        <Link class="nav-link" to="/viewall">View All Posts</Link>
        <Link class="nav-link" to="/viewmypost">View My Posts</Link>
        <span class="nav-link"  onClick={LogOutAction} >LogOut</span>
      </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default BlogHeader