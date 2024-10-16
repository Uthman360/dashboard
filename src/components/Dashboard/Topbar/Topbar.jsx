import React, { useEffect, useState } from 'react';
import "./Topbar.css"; // Separate CSS for navbar
import Profile from '../Profile/Profile';


const Navbar = ({ navHandler, handlerDark,setPopup,popup,handlerPop }) => {
  useEffect(()=>{
    
 },[])

  return (
    <div className="top">
     <div className="top_bar">
     <div className="sidebar-toggle" onClick={navHandler}>
        <i className="uil uil-bars sidebar-toggle"></i>
      </div>
      <div className="search-box">
        <i className="uil uil-search" />
        <input type="text" placeholder="Search here..." />
      </div>

      <div className="profiles">
              <div className="profile-box" onClick={handlerPop}>
                <img src="https://syedz.vercel.app/assets/2-D_JiKlq0.jpg" alt="Profile" />
              </div>
    
        <Profile popup={popup} handlerDark={handlerDark} setPopup={setPopup} />

      </div>
     </div>
    </div>
  );
};

export default Navbar;
