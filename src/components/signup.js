import React, { useState } from "react";
import "../components/signup.css";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/signup', { name, email, number, age, username, password, gender })
      .then((result) => {console.log(result)
      if(result.data === "Username Unavailable"){
        alert("Username or email is already in Use");
      }
      else{
        navigate('/login');
      }
    })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="bg-img">
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label>
                  <h2>Signup</h2>{" "}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="name">Name:</label>
              </div>
              <div className="col">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  title = "Only Alphabets upto 45 characters"
                  pattern="[a-zA-Z a-zA-Z]*"
                  maxLength={45}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="Username">Email:</label>
              </div>
              <div className="col">
                {" "}
                <input
                  type="email"
                  id="email"
                  value = {email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="number">Number:</label>
              </div>
              <div className="col">
                <input
                  type="tel"
                  id="number"
                  value = {number}
                  onChange={(e) => setNumber(e.target.value)}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  required
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="Age">DOB:</label>
              </div>
              <div className="col-8">
                <input
                  type="date"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)} required
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="Username">Username:</label>
              </div>
              <div className="col">
                {" "}
                <input
                  type="text"
                  id="username"
                  value = {username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="password">Password:</label>
              </div>
              <div className="col">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="Username">Gender:</label>
              </div>
              <div className="col">
                {/* {" "} */}
                <input
                  type="text"
                  id="username"
                  value = {gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-primary btn-lg"
              id="bt2"
              type="submit"
            >
              Sign Up
            </button>

            <Link to="/login" className="btn btn-primary btn-lg" type="button">
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
