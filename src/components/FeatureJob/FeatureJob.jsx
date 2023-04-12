import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeatureJob.css'

const FeatureJob = ({feature}) => {
  const navigate = useNavigate();
  const handleNavigation =()=>{
    console.log(feature.id)
        navigate(`/details`)      
  }
  console.log(feature)
  const {job_title, company_icon,company_name,address,salary,place_of_work,job_type, job_type_1}=feature;
  return (
    <div className="feature">
      <div className="img-section">
        <img src={company_icon} alt="" />
     </div>
     <h4>{job_title}</h4>
     <h3>{company_name}</h3>
     <div className="job-type">
      <button >{job_type}</button>
      <button >{job_type_1}</button>
     </div>
     <div className='add-sal'>
      <h4>{address}</h4>
      <h4>Salary: $ {salary}</h4>
     </div>
     <button onClick={()=>handleNavigation()} className='btn-nav'>Job Details</button>
    </div>
  );
};

export default FeatureJob;