import React from "react";
import myimage1 from "./img1.png";
import Sidebar from "../../Sidebar";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Profile() {
  const fstyle = {
    borderRadius: "30px",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user._id;
    axios.get(`http://localhost:3001/getprofiledata/${id}`).then((result) => {
      setUsername(result.data.username);
      setEmail(result.data.email);
      setName(result.data.name);
      // setDob((result.data.dob))
      setNumber(result.data.number);
      setCity(result.data.city);
      setState(result.data.state);
      setCountry(result.data.country);
    })
  },[]);
  const user = JSON.parse(localStorage.getItem('user'));
  const id = user._id;
  const updateProfile=()=>{
  axios.put(`http://localhost:3001/updateprofile/${id}`,{name, email, number, city, state, country, dob}).then((result)=>{
    console.log(result.data);
    alert("updated Successfully");
    localStorage.setItem('user',JSON.stringify(result.data));
    // const updatedUser = JSON.parse(localStorage.getItem('user'));
    localStorage.removeItem('user');
    localStorage.setItem('user',JSON.stringify(result.data));
    // console.log(updatedUser);
  });
  }
  return (
    <>
      <Sidebar />
      <div className="container my-lg-5 profile">
        <form>
          <div className="form-group">
            <img src={myimage1} alt=".." />
            <label for="image">
              &nbsp;<b>Profile Image</b>
            </label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="image"
              accept="image/*"
              alt=""
            />
          </div>
          <div className="form-group my-2">
            <label for="username" className="headings">
              <b>Name</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="username"
              style={fstyle}
              placeholder="Enter your name"
              value = {name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="email" className="headings">
              <b>User Name</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="email"
              style={fstyle}
              placeholder="Enter your username"
              value = {username}
              disabled
            />
          </div>
          <div className="form-group my-2">
            <label for="pnumber" className="headings">
              <b>Phone Number</b>
            </label>
            <br />
            <input
              type="number"
              className="form-control my-2"
              id="pnumber"
              style={fstyle}
              placeholder="Enter your phone number"
              value = {number}
              onChange={(e)=>setNumber(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="email" className="headings">
              <b>Email id</b>
            </label>
            <br />
            <input
              type="email"
              className="form-control my-2"
              id="email"
              style={fstyle}
              placeholder="v@gmail.com"
              value= {email}
              disabled
            />
          </div>
          <div className="form-group my-2">
            <label for="dob" className="headings">
              <b>Select your DOB</b>
            </label>
            <br />
            <input
              type="date"
              className="form-control my-2"
              id="dob"
              style={fstyle}
              value={dob}
              onChange={(e)=>setDob(e.target.value)} 
            />
          </div>
          <div className="form-group my-2">
            <label for="city" className="headings">
              <b>City</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="blogTitle"
              style={fstyle}
              placeholder="Enter your city name"
              value ={city}
              onChange={(e)=>setCity(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="state" className="headings">
              <b>State</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="state"
              style={fstyle}
              placeholder="Enter your state"
              value={state}
              onChange={(e)=>setState(e.target.value)}
            />
          </div>
          <div className="form-group my-2">
            <label for="country" className="headings">
              <b>Country</b>
            </label>
            <br />
            <input
              type="text"
              className="form-control my-2"
              id="country"
              style={fstyle}
              placeholder="Enter your country"
              value={country}
              onChange={(e)=>setCountry(e.target.value)}
            />
          </div>
          <Link to = "/dashboard" type="button" className="btn btn-primary" onClick={updateProfile}>
            Update
          </Link>
          &nbsp;
          <Link to="/dashboard" className="btn btn-primary">
            Back
          </Link>
        </form>
      </div>
    </>
  );
}
