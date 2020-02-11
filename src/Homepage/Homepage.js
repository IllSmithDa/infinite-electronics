import React from 'react';
import './Homepage.scss';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
function Homepage() {
  return(
    <div className="app-container">
      <HeaderNavBar />
      <div className='first-section'>
        <span>New Whatever Desktop is Now Out!</span>
      </div>

      <div className='header-news-container'>
        <div className='section1'></div>
        <div className='section2'></div>
        <div className='section3'></div>
        <div className='section4'></div>
      </div>
    </div>
  );
}

export default Homepage;