import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
// import image1 from "../pexels-shvets-production-6975558.jpg";
import myimage1 from "./pages/Profile/img1.png";
import axios from "axios";
export default function Blog() {
  const [blogList, setBlogList] = useState([])
  const fstyle = {
    borderRadius: "30px",
  };

  const [blogObj, setBlogObj] = useState({
    "title": "",
    "description": "",
    "image": ""
  })

  const updateBlogForm = (e, field) => {
    setBlogObj((prevValue) => {
      return {
        title: field === 'title' ? e.target.value : prevValue.title,
        description: field === 'description' ? e.target.value : prevValue.description,
        image: field === 'image' ? e.target.value : prevValue.image,
      }
    })
  }



  const createBlog = () => {
    console.log("data5656", blogObj);
    axios
      .post('http://localhost:3001/bloguser/blogadd', blogObj)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => console.log(err));
  }

    const deleteBlog = (blogId)=>{
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
    setBlogObj({
      title: blog.title,
      description: blog.description,
      image: blog.image,
      _id: blog._id, 
    });
    document.getElementById('staticBackdrop').classList.add('show');
  };
  const updateBlog = () => {
    axios
      .put(`http://localhost:3001/bloguser/blogupdate/${blogObj._id}`, blogObj)
      .then((response) => {
        console.log('Blog updated:', response.data);
        setBlogList((prevBlogList) =>
          prevBlogList.map((blog) =>
            blog._id === blogObj._id ? { ...blog, ...blogObj } : blog
          )
        );
      })
      .catch((error) => {
        console.error('Error updating blog:', error);
      });
  };


  useEffect(() => {
    getAllBlogs()
  }, [])

  const getAllBlogs = () => {
    const apiUrl = 'http://localhost:3001/bloguser/blogget';

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
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Insert Blog
                </button>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Blog insertion{" "}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">

                  <form>
                    <div className="form-group">
                      <img src={myimage1} alt=".." />
                      <label for="image">
                        &nbsp;<b>Image</b>
                      </label>
                      <br />
                      <input
                        type="file"
                        className="form-control-file"
                        id="image"
                        accept="image/*"
                        alt=""
                      />
                    </div>
                    <div className="form-group my-2">
                      <label for="title" className="headings">
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
                        onChange={(e) => updateBlogForm(e, "title")}
                      />
                    </div>
                    <div className="form-group my-2">
                      <label for="descp" className="headings">
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
                        onChange={(e) => updateBlogForm(e, "description")}
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Discard
                  </button>
                  <button type="button" onClick={() => {
                   if (blogObj._id) {
                   updateBlog();
                   } else {
                    createBlog();
                   }
                   }
                  } class="btn btn-primary" data-bs-dismiss="modal">{blogObj._id ? 'Update Blog' : 'Create Blog'}

                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-body container">
            <div className="blog-body-head">
              <p className="bl-bd-head">All Blogs</p>
            </div>
            {/* {blogList?.map((blog) =>  (
      <>
        <p>{blog.title}</p>
      </>
    )
  )} */}
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
            <div className="blog-body-sec">
              {blogList.map((data, index) => (
                <div className="row">
                  <div className="col-1">
                    <p className="blog-text">{index + 1}</p>
                  </div>
                  <div className="col-2">
                    <img src={data.image} alt=".." />
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
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
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

              ))}

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}