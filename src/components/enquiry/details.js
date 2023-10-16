import React, { useState, useEffect } from 'react'
import Sidebar from "../Sidebar";
import axios from "axios";
import { Link, useNavigate,useLocation } from 'react-router-dom';

export default function Viewdetail() {
    const [contactList, setcontactList] = useState([])
    const location = useLocation()
    const { viewObj } = location.state
    const [contactObj, setcontactObj] = useState({
        
        "name" : "",
        "email": "",
        "queries":"",
        "createdAt":"",
        "_id":"",
        "userId":""
    })
    useEffect(()=>{
        console.log("form89898",viewObj)
        if(viewObj){
          setcontactObj({
            
            username: viewObj?.username || '',
            email: viewObj?.email || '',
            enquiry: viewObj?.enquiry || '',
            createdAt: viewObj?.createdAt || '',
            _id: viewObj?._id || '',
            userId: viewObj?.userId || '',
          });
        }
      },[])
   




    const [userId, setUserId] = useState([])

    useEffect(() => {
        getAllcontacts()
      }, [userId])
    
      const getAllcontacts = () => {
        const id = JSON.parse(localStorage.getItem('user'));
        console.log(id._id, 'lllll')
        const apiUrl = `http://localhost:3001/localhost:3001/enquiryuser/get/${id._id}`;
    
        axios
          .get(apiUrl)
          .then((response) => {
            console.log(response.data, 'dddddd')
            setcontactList(response.data)
    
    
          })
          .catch((err) => {
            console.error('Error:', err);
          });
      };

    return (

        <>
            <Sidebar />
            <div className="container project">
                <div className="project-head-sec">
                    <div className="row project-row1">
                        <div className="col">
                            <p className="project-head">Details</p>
                        </div>
                    </div><br />
                </div>
                <div className="col text-end">
                <Link to="/enquiry" className="btn btn-primary">
                  Back
              </Link>
              </div>
                <div className="project-body container">
                    <div className="project-body-head">
                        <p className="bl-bd-head">Your Details </p>
                    </div>

                    <div className="project-body-sec">
                        <div className="row">
                            <hr />
                        </div>
                        <div className="row">
                            
                            
                            <div className="col-1">
                                <p className="blog-text">Name</p>
                            </div>
                            <div className="col-2">
                                <p className="blog-text">Email ID</p>
                            </div>
                            <div className="col-2">
                                <p className="blog-text">Queries</p>
                            </div>
                            <div className="col-2">
                                <p className="blog-text">Date</p>
                            </div>
                        </div>
                        <div className="row">
                            <hr />
                        </div>
                        


                            <div className="blog-body-sec">

                                <div className="row" key={contactObj?._id} >
                                   
                                   
                                    <div className="col-1">
                                        <p className="blog-text">{contactObj.username}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="blog-text">{contactObj.email}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="blog-text">{contactObj.enquiry}</p>
                                    </div>
                                    <div className="col-3">
                                        <p className="blog-text">{contactObj.createdAt}</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}