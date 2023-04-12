import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  // const [job, setJob]=useState({})
  const details = useLoaderData();
  console.log(details);
  let jobID = useParams();
  console.log(jobID);
  // useEffect(() => {
  // //  const result= details.find(job => job.id === jobID)
  // //  setJob(result)
  
  // }, [])
  
  return (
    <div>
      <h1>This is detail job page</h1>
      
    </div>
  );
};

export default Details;