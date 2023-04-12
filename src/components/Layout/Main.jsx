import React from 'react';
import { Outlet } from 'react-router-dom';
import FeatureJobs from '../FeatureJobs/FeatureJobs';
import Header from '../Header/Header';
// import Jobs from '../Jobs/Jobs';

const Main = () => {
  return (
    <div>
      <Header></Header>
      
      <Outlet></Outlet>
    </div>
  );
};

export default Main;