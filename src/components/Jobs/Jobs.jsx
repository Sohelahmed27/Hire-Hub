import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import './Jobs.css'

const Jobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  
  return (
    <div className="list-container">
    <h1>Job Categories List</h1>
    <p> Explore endless opportunities with our diverse range of job listings.</p>
    <div className='jobs-container'>
    {
        jobs.map((job) =><Job
        key={job.title} 
        job={job}></Job>)
      }
    </div>
    </div>
  );
};

export default Jobs;