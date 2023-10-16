import React, { useEffect, useState } from "react";

import './Home.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [blogList, setBlogList] = useState([])
  const fstyle = {
    borderRadius: "30px",
  };

  

  


  useEffect(() => {
    getAllBlogs()
  }, [])

  const getAllBlogs = () => {
    const id = JSON.parse(localStorage.getItem('user'));
    console.log(id._id,'lllll')
    const apiUrl = `http://localhost:3001/bloguser/getbyuserID/${id._id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data, 'dddddd')
        setBlogList(response.data)


      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };



  return (
    <div className="image">
      <nav className="navbar navbar-expand-lg bg-color-transparent">
        <div className="container-fluid">
          <a className="navbar-brand logo1 px-5 mx-5" href="#">
            <h2><b>Programming</b> Hero</h2>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <ul className="nav justify-content-end " id="home">
            <li className="nav-item ">
              <Link className="nav-link active" to="/home">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PAGES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="addenquiry">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="Login">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="text  mx-5">
        <b>Featured Articles</b>
        <p>
          Enjoy Personalized,Fun and Interactive Learning Process While
          <span> Becoming A Programing Hero</span>
        </p>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        
        
        <div className="carousel-inner">
       
          <div className="carousel-item active" style={{ display:"flex" ,flexDirection:"row", justifyContent:"space-around" }}>
          {blogList.map((data, index) => (
            <div className="row ">
            
                <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src={data?.image} alt="Card image cap" />
  <div className="card-body">
   
    <p>{data.title}</p>
                    <p>{data.description}</p>
      
    
  </div>
</div>


              
              
            </div>
             
          
        
        ))}
         </div>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;

