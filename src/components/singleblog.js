import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar';
import axios from "axios";
import { Link, useNavigate,useLocation } from 'react-router-dom';

export default function Singleblog() {
    const [contactList, setcontactList] = useState([])
    const location = useLocation()
    const { blogsObj } = location.state
    const [contactObj, setcontactObj] = useState({
        "image" : "",
        "title" : "",
        "description": "",
       
        "_id":"",
        "userId":""
    })
    useEffect(()=>{
        console.log("form89898",blogsObj)
        if(blogsObj){
          setcontactObj({
            image: blogsObj?.image || '',
            title: blogsObj?.title || '',
            description: blogsObj?.description || '',
            
           
            _id: blogsObj?._id || '',
            userId: blogsObj?.userId || '',
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
                <Link to="/blog" className="btn btn-primary">
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
                            
                            <div className="col-2">
                                <p className="blog-text">image</p>
                            </div>
                            <div className="col-1">
                                <p className="blog-text">title</p>
                            </div>
                            <div className="col-2">
                                <p className="blog-text">description</p>
                            </div>
                           
                        </div>
                        <div className="row">
                            <hr />
                        </div>
                        


                            <div className="blog-body-sec">

                                <div className="row" key={contactObj?._id} >
                                   
                                    <div className="col-2">
                                        <img width={50} src={contactObj?.image}/>
                                    </div>
                                    <div className="col-1">
                                        <p className="blog-text">{contactObj?.title}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="blog-text">{contactObj?.description}</p>
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