import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <h2 className='site-title'>Jobhunt</h2>
      <nav className='nav-link'>
        <Link to='/'>Home</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/appliedjob'>Applied Jobs</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
     <button className='btn-nav'>Stat Appling</button>  
    </div>
  );
};

export default Header;