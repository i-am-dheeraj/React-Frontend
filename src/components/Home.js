import React, { useEffect, useState } from "react";
import image1 from "../components/card3.jpg";
import image2 from "../components/coding2.jpg";
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
    const apiUrl = 'http://localhost:3001/bloguser/blogget';

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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="Login">
                Login
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
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        
        <div className="carousel-inner">
       
          <div className="carousel-item active">
          {blogList.map((data, index) => (
            <div className="row">
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="vgjvhbkj" md-3 />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    {/* <h5>First slide label</h5> */}
                    <p>{data.title}</p>
                    <p>{data.description}</p>
                  </div>
                </div>

              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
              
            </div>
             ))}
          </div>
        
         
          <div className="carousel-item">
          {blogList.map((data, index) => (
            <div className="row">
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="vgjvhbkj" md-3 />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
           
            
          <div className="carousel-item">
          {blogList.map((data, index) => (
            <div className="row">
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="vgjvhbkj" md-3 />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <p>{data.title}</p>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div className="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div className="carousel-caption cardtext d-none d-md-block">
                    <span>{data.title}</span>
                    <p> {data.description}</p>
                  </div>
                </div>
              </div>
            </div>
             ))}
          </div>
           
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

