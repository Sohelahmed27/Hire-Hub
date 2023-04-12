import React from 'react';

import FeatureJobs from '../FeatureJobs/FeatureJobs';

import cover from '../../../public/All Images/cover-1.jpg'
import { useEffect, useState } from 'react';
import './Home.css'
import Job from '../Job/Job';



const Home = () => {
  const [jobs, setJobs] = useState([])
  
  useEffect(()=>{
         fetch('data/fakedb.json')
         .then(res=>res.json())
         .then(data =>setJobs(data));
  },[])
  return (
<div>
<section>
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
</section>
<section>
<div className='list-container'>
   <h1>Job Categories List</h1>
    <p> Explore endless opportunities with our diverse range of job listings.</p>
      <div className='jobs'>
      {
        jobs.map(job =><Job job={job}></Job>)
      }

      </div> 
    </div>
</section>




 
  <FeatureJobs></FeatureJobs>
</div>
  );
};

export default Home;