
import React, { useState } from "react";
// import "./components/home.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function ContactForm() {
    const [enquiryObj, setenquiryObj] = useState({
    username: "",
    date: "",
    email: "",
    enquiry: "",
  });
  const navigate = useNavigate()


  const updateenquiryForm = (e, field,id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(id,'dd')
    setenquiryObj((prevValue) => {
      return {
        username: field === 'username' ? e.target.value : prevValue.username,
        date: field === 'date' ? e.target.value : prevValue.date,
        email: field === 'email' ? e.target.value : prevValue.email,
        enquiry: field === 'enquiry' ? e.target.value : prevValue.enquiry,
        
        _id: id,
        userId:user._id
      }
    })
  }

  const createenquiry = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("data5656",enquiryObj);
    axios
      .post('http://localhost:3001/enquiryuser/enquiryadd',enquiryObj)
      .then((result) => {
        console.log(result)
        navigate("/home");
        
      })
      .catch((err) => console.log(err));
  }

  return (

    <div className="container ">
      <h2>Contact Us</h2>
      <form >
        <div className="form-group">
          <label htmlFor="name">UserName:</label>
          <input
            type="text"
            name="username"
            id="username"
           
            
            className="form-control"
            placeholder="Your Name"
            onChange={(e) => updateenquiryForm(e, "username")}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">date:</label>
          <input
            type="date"
            name="date"
            id="date"
            
          
            className="form-control"
            placeholder="Date"
            onChange={(e) => updateenquiryForm(e, "date")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            
            
            className="form-control"
            placeholder="Your Email"
            onChange={(e) => updateenquiryForm(e, "email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="enquiry">Enquiry:</label>
          <input
            type="text"
            name="enquiry"
            id="enquiry"
           
            
            className="form-control"
            placeholder="Your enquiry"
            onChange={(e) => updateenquiryForm(e, "enquiry")}
          />
        </div>

        <br></br>
        <button type="submit" className="btn btn-primary"onClick={($event) => createenquiry($event)}>
          Submit
        </button>
      </form>
    </div>

  );
}

export default ContactForm;