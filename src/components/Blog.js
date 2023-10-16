import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./config"
import myimage1 from "./pages/Profile/img1.png";
import axios from "axios";
import { firebaseRef, storage } from './config';

export default function Blog() {
  const [blogList, setBlogList] = useState([])
  const [userId, setUserId] = useState([])
  const [imageUpload, setImageUpload] = useState(null);
  const [fileObj,setFileObj] = useState({
    file: null,
    image: null
  })
  const fstyle = {
    borderRadius: "30px",
  };
 


  // handleFileChange = (e) => {
  //   if (e.target.files[0]) {
  //     const image = e.target.files[0];
  //     setFileObj((prevValue) => {
  //       return { file: e.target.files[0], image: image };
  //     });
  //   }
  // };

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
          setBlogObj((prevValue) => {
            return {
              title: prevValue.title,
              description: prevValue.description,
              image: url,
              _id: prevValue?._id,
              userId:prevValue?.userId
            }
          })
          // this.setState({url});
      })
  });
}

useEffect(()=>{
  const id = JSON.parse(localStorage.getItem('user'));
  setUserId(id._id)
  console.log(userId,'vishal')
},[])
  const [blogObj, setBlogObj] = useState({
    "title": "",
    "description": "",
    "image": "",
    "_id":"",
    "userId":""
  })
  
  const updateBlogForm = (e, field,id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(id,'dd')
    setBlogObj((prevValue) => {
      return {
        title: field === 'title' ? e.target.value : prevValue.title,
        description: field === 'description' ? e.target.value : prevValue.description,
        image: field === 'image' ? e.target.value : prevValue.image,
        _id: id,
        userId:user._id
      }
    })
  }



  const createBlog = () => {
    console.log("data5656", blogObj);
    axios
      .post('http://localhost:3001/bloguser/blogadd', blogObj)
      .then((result) => {
        console.log(result)
        getAllBlogs()
      })
      .catch((err) => console.log(err));
  }

  const deleteBlog = (blogId) => {
    axios
      .delete(`http://localhost:3001/bloguser/blogdelete/${blogId}`)
      .then((response) => {
        console.log('Blog deleted:', response.data);
        setBlogList(blogList.filter((blog) => blog._id !== blogId));
      })
      .catch((error) => {
        console.error('Error deleting blog:', error);
      });
  }
  const openEditModal = (blog) => {
    console.log(blog._id,'open')
    setBlogObj({
      title: blog.title,
      description: blog.description,
      image: blog.image,
      _id: blog._id,
    });
    document.getElementById('staticBackdrop')?.classList.add('show');
  }

  const closeModal = () =>{
    document.getElementById('staticBackdrop')?.classList.remove('show');

  }


  const updateBlog = (id) => {
  
    axios
      .put(`http://localhost:3001/bloguser/blogupdate/${id}`, blogObj)
      .then((response) => {
        
        window.location.reload(true);
        getAllBlogs()
      })
      .catch((error) => {
        console.error('Error updating blog:', error);
      });
  };


  const [dspblog, setDspblog] = useState([]) // display blog array




  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('user'));
    console.log(id,'oooo')
    axios.get(`http://localhost:3001/bloguser/getbyuserID/${id._id}`)
      .then((result) => {
        const arr = [result.data];
        // const len = arr[0].length;
        console.log(arr[0]);
        setDspblog(arr[0]);



      })
      .catch(err => (console.log(err)))
  },[]);  // useEffect getbyuserID




  useEffect(() => {
    getAllBlogs()
  }, [])

  const getAllBlogs = () => {
    const id = JSON.parse(localStorage.getItem('user'));
    console.log(id._id,'lllll')
    const apiUrl = `http://localhost:3001/bloguser/getbyuserID/${id._id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data, 'dddddd')
        setBlogList(response.data)


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
                <p className="blog-head">Blogs</p>
              </div>
              <div className="col text-end">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Insert Blog
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Blog insertion{" "}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={()=> closeModal()}
                  ></button>
                </div>
                <div className="modal-body">

                  <form>
                    <div className="form-group">
                      <img width={50} src={blogObj?.image} alt=".." />
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
                      
                        onChange={(e) => updateBlogForm(e, "title")}
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
                       
                        onChange={(e) => updateBlogForm(e, "description")}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Discard
                  </button>
                  <button type="button" onClick={() => createBlog()
                  } className="btn btn-primary" data-bs-dismiss="modal">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-body container">
            <div className="blog-body-head">
              <p className="bl-bd-head">All Blogs</p>
            </div>
           
            <div className="blog-body-sec">
              <div className="row">
                <hr />
              </div>
              <div className="row">
                <div className="col-1">
                  <p className="blog-text">S.no</p>
                </div>
                <div className="col-2">
                  <p className="blog-text">Image</p>
                </div>
                <div className="col">
                  <p className="blog-text">Title</p>
                </div>
                <div className="col-6">
                  <p className="blog-text">Description</p>
                </div>
              </div>
              <div className="row">
                <hr />
              </div>
            </div>
            {blogList.map((data, index) => (
            <div className="blog-body-sec">
              
                <div className="row" key={data?._id}>
                  <div className="col-1">
                    <p className="blog-text">{index + 1}</p>
                  </div>
                  <div className="col-2">
                    <img width={50} src= {data?.image} alt=".." />
                  </div>
                  <div className="col">
                    <p className="blog-text">{data.title}</p>
                  </div>
                  <div className="col">
                    <p className="blog-text">{data.description}</p>
                  </div>
                  <div className="col">
                    <div className="col text-end">
                      <div className="row">
                        <div className="col">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#edit"
                            onClick={() => openEditModal(data)}
                          >
                            Edit
                          </button>
                       
                        </div>
                       
                        <div className="col">
                          <button className="btn-light btn" onClick={() => deleteBlog(data._id)} >Delete</button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

            

              <hr />
            </div>
              ))}
            <div className="modal" tabIndex="-1" id="edit">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1 className="modal-title">Edit Blog{" "}
                                  </h1>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                </div>
                                <div className="modal-body">
                                  <form>
                                    <div className="form-group">
                                      <img src={myimage1} alt=".." />
                                      <label htmlFor="image">
                                        &nbsp;<b>Image</b>
                                      </label>
                                      <br />
                                      <input
                                        label="Image"
                                        className="form-control-file"
                                        id="image"
                                        accept="image/*"
                                        placeholder="Select Image"
                                        type="file"
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
                                        value={blogObj.title}
                                        onChange={(e) => updateBlogForm(e, "title",blogObj._id)}
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
                                        value={blogObj.description}
                                        onChange={(e) => updateBlogForm(e, "description",blogObj._id)}
                                      />
                                    </div>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="button" onClick={() => updateBlog(blogObj._id)} className="btn btn-primary">
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
          </div>
        </div>
      </div>
    </>
  );
}