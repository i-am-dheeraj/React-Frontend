import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import axios from "axios";



export default function Enquiry({ query, onQueryUpdated }) {
    const [enquiryObj, setenquiryObj] = useState({
        "username": "",
        "email": "",
        "date":"",
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

  
  const deleteenquiry = (enquiryId) => {
    axios
      .delete(`http://localhost:3001/enquiryuser/enquirydelete/${enquiryId}`)
      .then((response) => {
        console.log('enquiry deleted:', response.data);
        setenquiryList(enquiryList.filter((enquiry) => enquiry._id !== enquiryId));
      })
      .catch((error) => {
        console.error('Error deleting enquiry:', error);
      });
  }


 

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

              <div class="input-group date datepicker">
                <input
                  type="text"
                  
                  id="startDate"
                  placeholder="dd/mm/yyyy"
                />
                <div class="input-group-addon">
                  <span class="glyphicon glyphicon-th"></span>
                </div>
              </div>
           

          
              <div class="input-group date datepicker">
                <input
                  type="text"
                 
                  id="endDate"
                  placeholder="dd/mm/yyyy"
                />
                <div class="input-group-addon">
                  <span class="glyphicon glyphicon-th"></span>
                </div>
              </div>
             
              <div className="col-2 text-end">
                <Link to="/enquiry" className="btn btn-primary">
                  {" "}
                  FILTER{" "}
                </Link>
              </div>
              <div className="col-1 text-end">
                <Link to="/enquiry" className="btn btn-secondary">
                  {" "}
                  RESET{" "}
                </Link>
              </div>
             
            </div>
            </div>
            <hr></hr>

            
            <table>
                            <thead>
                                <tr>
                                    <th >S.No</th>
                                    <th >Date</th>
                                    <th >Name</th>
                                    <th >Email ID</th>
                                    <th >Queries</th>
                                    <th >Status</th>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {enquiryList.map((data, index) =>(
                                <tr key={data?._id}>
                                    <td >{index+1}</td>
                                    <td >{data.date}</td>
                                    <td >{data.username}</td>
                                    <td >{data.email}</td>
                                    <td >{data.enquiry}</td>
                                    <td >
                                        <button class="btn btn-info">Pending</button>
                                    </td>
                                    <td >
                                        <select id="action" name="action">
                                            <option value="detail">View Detail</option>
                                            <option value="sendvia">Send via Email</option>
                                        </select>
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