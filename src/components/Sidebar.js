import React, { useEffect, useState } from "react";
import image1 from "../Logo.png";
import avatar from "../avatar.jpg";
import dash from "../dash.svg";
// import nft from "../nft.png";
import table from "../table.png";
import profile from "../profile.png";
// import sign from "../sign.png";
import notify from "../notification.png";
import dark from "../dark-mode.png";
import info from "../info.png";
import DarkModeToggle from './DarkModeToggle';
import Toggle from 'react-toggle';
// import Profile from "./pages/Profile";
import { Link } from "react-router-dom";
import Project from "./project/project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [isDark, setIsDark] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        // Toggle dark mode logic here
        setIsDark(!isDark);
    };

    useEffect(() => {
        // Apply dark mode styles to the entire page
        document.body.classList.toggle("dark-mode", isDark);
    }, [isDark]);
  const user = JSON.parse(localStorage.getItem('user'));
 
  // const handleLogout = () => {};
  
  return (
    <>
      <div className="container-fluid d-flex">
        <div className="sidebar">
          <img src={image1} alt="" className="mt-4 mb-5 mx-4 px-1" />
          <Link className="" to="/dashboard">
            <img src={dash} alt=".." />
            DASHBOARD
          </Link>
          <Link to="/blog">
            <img src={table} alt=".." />
            BLOG
          </Link>
          <Link to="/profile">
            <img src={profile} alt=".." />
            PROFILE
          </Link>
          <Link to="/Project">
            <img src={profile} alt=".." />
            PROJECT
          </Link>
          <Link to="/enquiry">
            <img src={profile} alt=".." />
            ENQUIRY
          </Link>
        </div>
        <div className="cover"></div>
      </div>
      <div className="avatar">
        <div className="row avatar-sec">
          <div className="col">
            {/* <form> */}
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="search"
            />
          </div>
          <div className="col">
            <img src={notify} alt=".." className="vector" />
          </div>
          <div className="col">
          <DarkModeToggle />
          </div>
          <div className="col">
            <img src={info} alt=".." className="vector" />
          </div>
          <div className="col">
            <img
              src={avatar}
              alt=""
              className="vector-avatar dropdown-toggle"
              data-bs-toggle="dropdown"
            />
            <ul class="dropdown-menu">
              <li>
                <p className="px-3">Hello, {user.name}</p>
              </li>
              <li><hr className="dropdown-divider"/></li>
              <li>
                <Link to="/Dashboard" className="dropdown-item">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/blog" className="dropdown-item">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
              </li>
            
              <li>
                <Link class="dropdown-item" to="/login">
                  <button className="btn btn-danger">Logout</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
