import React from "react";
// import myimage1 from "./img1.png";
import { firebaseRef, storage } from '../config';
import "../config"
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
export default function Addproject() {
    const navigate = useNavigate()
  const fstyle = {
    borderRadius: "30px",
  };
  const [projectObj, setprojectObj] = useState({
    "title": "",
    "description": "",
    "image": "",
    "url":"",
    "type":"",
    "_id":"",
    "userId":""
  })
  const updateprojectForm = (e, field,id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(id,'dd')
    setprojectObj((prevValue) => {
      return {
        title: field === 'title' ? e.target.value : prevValue.title,
        description: field === 'description' ? e.target.value : prevValue.description,
        image: field === 'image' ? e.target.value : prevValue.image,
        url:field ==='url'? e.target.value : prevValue.url,
        type:field ==='type'? e.target.value : prevValue.type,
        _id: id,
        userId:user._id
      }
    })
  }
  


  const handleUpload = (e) => {
    const image = e.target.files[0];
    console.log("image90",image);
  
  
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
    console.log("functiion called", uploadTask)
  
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            setprojectObj((prevValue) => {
              return {
                title: prevValue.title,
                description: prevValue.description,
                image: url,
                url:prevValue.url,
                type:prevValue.type,
                _id: prevValue?._id,
                userId:prevValue?.userId
              }
            })
            // this.setState({url});
        })
    });
  }





  const createproject = () => {
    console.log("data5656",projectObj);
    axios
      .post('http://localhost:3001/projectuser/projectadd',projectObj)
      .then((result) => {
        console.log(result)
        navigate("/project");
        
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
     <Sidebar />
      <div className="container my-lg-5 profile">
      <form>
                    <div className="form-group">
                      <img width={50} src="" alt=".." />
                      <label htmlFor="image">
                        &nbsp;<b>Image</b>
                      </label>
                      <br />
                      <input
                        type="file"
                        className="form-control-file"
                        id="image"
                        accept="image/*"
                        alt=""
                        onChange={(e) => {
                            handleUpload(e);
                          }}
                      />
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="title" className="headings">
                        <b>Title</b>
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control my-2"
                        id="title"
                        style={fstyle}
                        placeholder="Enter your title"
                        onChange={(e) => updateprojectForm(e, "title")}
                      />
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="descp" className="headings">
                        <b>Description</b>
                      </label>
                      <br />
                      <input
                        type="textarea"
                        className="form-control my-2"
                        id="descp"
                        style={fstyle}
                        placeholder="Enter your description"
                        onChange={(e) => updateprojectForm(e, "description")}
                      />
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="url" className="headings">
                        <b>Url</b>
                      </label>
                      <br />
                      <input
                        type="textarea"
                        className="form-control my-2"
                        id="url"
                        style={fstyle}
                        placeholder="Enter your Url"
                        onChange={(e) => updateprojectForm(e, "url")}
                      />
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="Type" className="headings">
                        <b>Type</b>
                      </label>
                      <br />
                      <input
                        type="textarea"
                        className="form-control my-2"
                        id="type"
                        style={fstyle}
                        placeholder="Enter your Type"
                        onChange={(e) => updateprojectForm(e, "type")}
                      />
                    </div>
                   
                <Link to="/project" className="btn btn-secondary btn-lg" id="bt2">
            Discard
          </Link>
                  
                <button type="button" className="btn btn-primary btn-lg" onClick={() => createproject()} id="bt2">
            Add Project
          </button>
                  </form>
      </div>
    </>
  );
}
