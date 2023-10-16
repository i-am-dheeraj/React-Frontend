
import "./App.css";
import Profile from "../src/components/pages/Profile/Profile";
import Login from "../src/components/login";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Blog from "./components/Blog";
import Signup from "./components/signup";
import Home from "./components/Home";
import Project from './components/project/project';
import Addproject from "./components/project/addproject";
import Editproject from "./components/project/editproject";
import Enquiry from "./components/enquiry/enquiry";
import Addenquiry from "./components/enquiry/addenquiry";
import Details from "./components/enquiry/details";
import Singleblog from "./components/singleblog";


function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route>
        <Route exact path="/" element={<Home/>} />
         <Route path="/home" element={<Home/>} />

          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/dashboard" element={<Dashboard/>}/>
          <Route path = "/profile" element={<Profile/>}/>
          <Route path = "/Project" element={<Project/>}/>
          <Route path="/addproject"  element={<Addproject/>}/>
          <Route path="/enquiry" element={<Enquiry/>}/>
          <Route path="/editproject"  element={<Editproject/>}/>
          <Route path = "/Blog" element = {<Blog/>}/>
          <Route path="/addenquiry" element={<Addenquiry/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/singleblog" element={<Singleblog/>}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
