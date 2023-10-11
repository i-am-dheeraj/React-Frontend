import React from "react";
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
          <ul class="nav justify-content-end " id="home">
            <li class="nav-item ">
              <Link class="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="Login">
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
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="vgjvhbkj" md-3 />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    {/* <h5>First slide label</h5> */}
                    <p>Why Avoiding Programing Is Bad For Your Business</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>

              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="vgjvhbkj" md-3 />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="vgjvhbkj" md-3 />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <p>Social Media Hacking- What Is Phishing ?</p>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
              <div class="col-lg col-sm-12 col-md-6 mt-5 mb-5">
                <div class="card">
                  <img className="card-img-top" src={image1} alt="Card image cap" />
                  <div class="carousel-caption cardtext d-none d-md-block">
                    <span>Social Media Hacking- What Is Phishing ?</span>
                    <p>Jan 10, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

