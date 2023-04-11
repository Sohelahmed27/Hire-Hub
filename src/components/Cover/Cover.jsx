import React from 'react';
import './Cover.css'
import cover from '../../../public/All Images/cover-1.jpg'

const Cover = () => {
  return (
    <div className="cover">
    <div className="container-cover">
      <h1><span>Discover new career paths</span> <br/>Find your perfect job .</h1>
      <p>Welcome to Jobhunt, your go-to destination for finding your next career opportunity. We provide a comprehensive platform for job seekers to explore a wide range of job listings from top employers in various industries. </p>
      <button className='btn-nav'>Get Start</button> 

   </div>
    <div className="cover-img">
      <img src={cover}/>
    </div>
  </div>
  );
};

export default Cover;