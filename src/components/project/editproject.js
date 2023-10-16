import React from "react";
// import myimage1 from "./img1.png";
import Sidebar from "../Sidebar";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import Project from "./project";
export default function Editproject() {
  const location = useLocation()
  const { editableObj } = location.state
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

  useEffect(()=>{
    console.log("form89898",editableObj)
    if(editableObj){
      setprojectObj({
        title: editableObj?.title || '',
        description: editableObj?.description || '',
        image: editableObj?.image || '',
        url: editableObj?.url || '',
        type: editableObj?.type || '',
        _id: editableObj?._id || '',
        userId: editableObj?.userId || '',
      });
    }
  },[])
  
  
  const updateprojectForm = (e, field,id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(id,'dd')
    setprojectObj((prevValue) => {
      return {
        title: field === 'title' ? e.target.value : prevValue.title,
        description: field === 'description' ? e.target.value : prevValue.description,
        image: field === 'image' ? e.target.value : prevValue.image,
        url: field === 'url' ? e.target.value : prevValue.url,
        type : field === 'type' ? e.target.value : prevValue.type,
        _id: id,
        userId:user._id
      }
    })
  }
  const handleUpload = (e) => {
    const image = e.target.files[0];
    console.log("image90",image);}
  
 
  const updateproject = (id) => {
  
    axios
      .put(`http://localhost:3001/projectuser/projectupdate/${id}`, projectObj)
      .then((response) => {
        
        navigate("/project");
        
      })
      .catch((error) => {
        console.error('Error updating project:', error);
      });
  };
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
                        value={projectObj.title}
                        onChange={(e) => updateprojectForm(e, "title",projectObj._id)}
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
                        value={projectObj.description}
                        onChange={(e) => updateprojectForm(e, "description",projectObj._id)}
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
                        placeholder="Enter your url"
                        value={projectObj.url}
                        onChange={(e) => updateprojectForm(e, "url",projectObj._id)}
                      />
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="type" className="headings">
                        <b>type</b>
                      </label>
                      <br />
                      <input
                        type="textarea"
                        className="form-control my-2"
                        id="type"
                        style={fstyle}
                        placeholder="Enter your Type"
                        value={projectObj.type}
                        onChange={(e) => updateprojectForm(e, "type",projectObj._id)}
                      />
                    </div>
                   
                <Link to="/project" className="btn btn-secondary btn-lg" id="bt2">
            Discard
          </Link>
                  
               <button type="button" className="btn btn-primary btn-lg" id="bt2"onClick={() => updateproject(projectObj._id)}>
            Edit
          </button>
          
                  </form>

      </div>
      
    </>
  );
}
