import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "../config"
import { Link } from "react-router-dom";
import axios from "axios";


export default function Project() {
  const [projectList, setprojectList] = useState([])
 
  const [projectObj, setprojectObj] = useState({
    "title": "",
    "description": "",
    "image": "",
    "url":"",
    "type":"",
    "_id":"",
    "userId":""
  })
  
 
 
  const deleteproject = (projectId) => {
    axios
      .delete(`http://localhost:3001/projectuser/projectdelete/${projectId}`)
      .then((response) => {
        console.log('project deleted:', response.data);
        setprojectList(projectList.filter((project) => project._id !== projectId));
      })
      .catch((error) => {
        console.error('Error deleting project:', error);
      });
  }

  

 
  
  
  



 

 
 

 


  
  const [dspproject, setDspproject] = useState([]) // display project array




  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('user'));
    console.log(id,'oooo')
    axios.get(`http://localhost:3001/projectuser/getbyuserID/${id._id}`)
      .then((result) => {
        const arr = [result.data];
        // const len = arr[0].length;
        console.log(arr[0]);
        setDspproject(arr[0]);



      })
      .catch(err => (console.log(err)))
  },[]);  // useEffect getbyuserID




  useEffect(() => {
    getAllprojects()
  }, [])

  const getAllprojects = () => {
    const id = JSON.parse(localStorage.getItem('user'));
    console.log(id._id,'lllll')
    const apiUrl = `http://localhost:3001/projectuser/getbyuserID/${id._id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data, 'dddddd')
        setprojectList(response.data)


      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };


  return (
    <>
      <Sidebar />
      

      <div className="container blog">
                <div className="blog-sec">
                    <div className="blog-head-sec">
                        <div className="row blog-row1">
                            <div className="col">
                                <p className="blog-head">My Projects</p>
                            </div>
                            <div className="col text-end">
                                  <Link to="/addproject" className="btn btn-primary btn-lg" id="bt2">
            Add
           </Link> 


                            </div>
                        </div>
                    </div>
         
          <div className="blog-body container">
            <div className="blog-body-head">
              <p className="bl-bd-head">All Project</p>
            </div>
            
            <div className="blog-body-sec">
              <div className="row">
                <hr />
              </div>
              <div className="row">
                <div className="col-1">
                  <p className="blog-text">S.no</p>
                </div>
                <div className="col-1">
                  <p className="blog-text">Image</p>
                </div>
                <div className="col-1">
                  <p className="blog-text">Title</p>
                </div>
                <div className="col-2">
                  <p className="blog-text">Description</p>
                </div>
                <div className="col-2">
                  <p className="blog-text">Url</p>
                </div>
                <div className="col-1">
                  <p className="blog-text">Type</p>
                </div>
              </div>
              <div className="row">
                <hr />
              </div>
            </div>
            {projectList.map((data, index) => (
            <div className="blog-body-sec">
                <div className="row" key={data?._id}>
                  <div className="col-1">
                    <p className="blog-text">{index + 1}</p>
                  </div>
                  <div className="col-1">
                    <img width={50} src= {data?.image} alt=".." />
                  </div>
                  <div className="col-1">
                    <p className="blog-text">{data.title}</p>
                  </div>
                  <div className="col-2">
                    <p className="blog-text">{data.description}</p>
                  </div>
                  <div className="col-2">
                    <p className="blog-text">{data.url}</p>
                  </div>
                  <div className="col-1">
                    <p className="blog-text">{data.type}</p>
                  </div>
                 
                  <div className="col" style={{display:"contents"}}>
                  
                <Link to="/editproject" state={{ editableObj: data }} className="btn btn-primary btn-lg" id="bt2">
            Edit
          </Link>
                  <div className="col">
                  <button type="button" class="btn btn-secondary btn-lg" onClick={() => deleteproject(data._id)} >Delete</button>
                  </div>
                 
                 
                </div>
                </div>
              <hr />
            </div>
              ))}
          </div>
        </div>
      </div>   
    </>
  );
}