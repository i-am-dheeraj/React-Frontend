import React, { useEffect, useState } from 'react'
// import myimage1 from './img1.png';
import Sidebar from '../Sidebar';

export default function Dashboard() {
  const [user, setUser] = useState("");
  // const user = JSON.parse(localStorage.getItem('user'));\
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  const name = user.name;
  // const dspname = name.sp
  return (
    <>
      <Sidebar />
      <div className="container-fluid my-lg-5">
        <p align="center" className='heading'>Welcome Back, {name}</p>
      </div>
    </>
  );
}

