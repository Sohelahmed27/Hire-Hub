import React from 'react';
import './Job.css'

const Job = ({job}) => {
  const { count, title, icon}= job;
  return (
    <div className='job-container'>
    
      <div>
      <img src={icon}/>
      
      <h3>{title}</h3>
      <p>Jobs Number:{count}</p>
      </div>
    </div>
  );
};

export default Job;