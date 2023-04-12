import React from 'react';

// import FeatureJobs from '../FeatureJobs/FeatureJobs';

import cover from '../../../public/All Images/cover-1.jpg'
import { useEffect, useState } from 'react';
import './Home.css'
import Job from '../Job/Job';
import FeatureJob from '../FeatureJob/FeatureJob';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [features, setFeatures] = useState([]);
  
  useEffect(()=>{
         fetch('https://run.mocky.io/v3/f70daafe-ad8c-4d72-89e5-925916b41b6c')
         .then(res=>res.json())
         .then(data =>setFeatures(data));
  },[])
  useEffect(()=>{
         fetch('data/fakedb.json')
         .then(res=>res.json())
         .then(data =>setJobs(data));
  },[])
   const navigate = useNavigate();

   const handleNavigate =()=>{

   }
  
  return (
<div>



<section>
<div className="cover">
    <div className="container-cover">
      <h1>Discover new career paths <br/><span className="cover-foc">Find Your Dream job</span>.</h1>
      <p id='cover'>Welcome to Jobhunt, your go-to destination for finding your next career opportunity. We provide a comprehensive platform for job seekers to explore a wide range of job listings from top employers in various industries. </p>
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
        jobs.map(job =><Job
        key={jobs.id} 
        job={job}></Job>)
      }

      </div> 
    </div>
</section>

<section>
<div className="feature-container">
      <h1>Featured Jobs</h1>
      <p>Find Your Dream Job: Browse Thousands of Open Positions on Our Job Board</p>
      <div className="feature-jobs">
      {
        features.map(feature => <FeatureJob
        key={feature.id}
        feature={feature}></FeatureJob>)
      }

      </div>
    <button className='btn-feature'>Show All</button> 
    </div>
</section>




 
  {/* <FeatureJobs></FeatureJobs> */}
</div>
  );
};

export default Home;