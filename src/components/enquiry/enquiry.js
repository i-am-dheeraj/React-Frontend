import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import axios from "axios";


import "../enquiry/dark-mode.css";

export default function Enquiry({ query, onQueryUpdated }) {
  
    const [enquiryObj, setenquiryObj] = useState({
        "username": "",
        "email": "",
       
        "enquiry": "",
      });
  const [enquiryList, setenquiryList] = useState([])


 

  useEffect(() => {
    getAllenquirys()
  }, [])

  const getAllenquirys = () => {
    const id = JSON.parse(localStorage.getItem('user'));
    console.log(id._id,'lllll')
    const apiUrl = `http://localhost:3001/enquiryuser/getbyuserID/${id._id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data, 'dddddd')
        setenquiryList(response.data)


      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };
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

  
 
  
  
 

  return (
    <>
      <Sidebar />
      
      <div className="container blog">
        <div className="blog-sec">
          <div className="blog-head-sec">
            <div className="row blog-row1" style={{display:"inline-block"}}>
              <div className="col">
                <p className="blog-head">Enquiry</p>
              </div>

              </div>
</div>
            <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>S.No</th>
                                   
                                    <th style={thStyle}>Name</th>
                                    <th style={thStyle}>Email ID</th>
                                    <th style={thStyle}>Queries</th>
                                    <th style={thStyle}>Status</th>
                                    <th style={thStyle}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enquiryList.map((data, index) => (
                                    <tr key={data?._id}>
                                        <td style={tdStyle}>{index + 1}</td>
                                       
                                        <td style={tdStyle}>{data.username}</td>
                                        <td style={tdStyle}>{data.email}</td>
                                        <td style={tdStyle}>{data.enquiry}</td>
                                        
                                        <td style={tdStyle}>
                                            <button class="btn btn-danger">Pending</button>
                                        </td>
                                        <td style={tdStyle}>

                                            <div class="dropdown">
                                                <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Action
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><Link to="/details" state={{ viewObj: data }} class="dropdown-item">View Detail</Link></li>
                                                    <li><Link to="/#" class="dropdown-item">Send via Email</Link></li>
                                                </ul>
                                            </div>

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