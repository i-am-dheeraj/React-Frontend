import React, { useState } from "react";
import "../components/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((result) => {
        // console.log(result?.data,"data4545");
        if (result.data.message === "Success") {
          localStorage.setItem('user',JSON.stringify(result.data?.data))
          localStorage.setItem('token',JSON.stringify(result?.data.token))
          navigate("/dashboard");
        } else if (result.data === "Username or password is incorrect") {
          alert("Please check your credentials and try again");
        } else {
          alert("Enter a valid username");
        }
      });
    
  };
  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-lg " type="Submit">
            Login
          </button>

          <Link to="/signup" className="btn btn-primary btn-lg" id="bt2">
            Sign Up
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
