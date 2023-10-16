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

  
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
};

const thStyle = {
    border: '1px solid #000',
    padding: '8px',
    textAlign: 'left',
};

const tdStyle = {
    border: '1px solid #000',
    padding: '8px',
    textAlign: 'left',
};
 
  
  
  



 

 
 

 


  
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
            <div className="row blog-row1 " style={{display:"flex"}}>
              <div className="col ">
                <p className="blog-head">PROJECTS</p>
                </div>
                <div className="col " style={{display:"contents"}}>
              <Link to="/addproject" className="btn btn-primary btn-lg" id="bt2">
            Add
           </Link> </div>
              </div>
</div>
            <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>S.No</th>
                                   
                                    <th style={thStyle}>Image</th>
                                    <th style={thStyle}>Title</th>
                                    <th style={thStyle}>Description</th>
                                    <th style={thStyle}>Url</th>
                                    <th style={thStyle}>type</th>
                                    <th style={thStyle}>Edit</th>
                                    <th style={thStyle}>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projectList.map((data, index) => (
                                    <tr key={data?._id}>
                                        <td style={tdStyle}>{index + 1}</td>
                                       
                                        <td style={tdStyle}><img width={50} src= {data?.image} alt=".." /></td>
                                        <td style={tdStyle}>{data.title}</td>
                                        <td style={tdStyle}>{data.description}</td>
                                        <td style={tdStyle}>{data.url}</td>
                                        <td style={tdStyle}>{data.type}</td>
                                      
                                        <td style={tdStyle}>
                                       
                                        <Link to="/editproject" state={{ editableObj: data }} className="btn btn-primary btn-lg" id="bt2">
            Edit
          </Link></td>
         <td style={tdStyle}>
                  <button type="button" class="btn btn-secondary btn-lg" onClick={() => deleteproject(data._id)} >Delete</button>
                 
                  </td>         

                                     
                                    </tr>
                                ))}
                            </tbody>

                        </table>

 
                    </div>
                </div>
        
       
    </>
  );
}