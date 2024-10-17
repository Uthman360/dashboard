import React, { useEffect, useState, useRef } from 'react';
import "./Topbar.css"; // Separate CSS for navbar
import Profile from '../Profile/Profile';

const Navbar = ({ navHandler, handlerDark }) => {
  const [popup, setPopup] = useState(false);
  const profileBoxRef = useRef(null);  // Ref for the profile box to track clicks inside

  const handlerPop = () => {
    setPopup(!popup);  // Toggle the popup on profile box click
  };

  const handleClickOutside = (event) => {
    if (profileBoxRef.current && !profileBoxRef.current.contains(event.target)) {
      setPopup(false);  // Close popup when clicking outside
    }
  };

  // Add event listener when popup is true
  useEffect(() => {
    if (popup) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);  // Clean up event when popup is closed
    }

    // Clean up when the component unmounts
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup]);

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
          <div className="profile-box" ref={profileBoxRef} onClick={handlerPop}>
            <img src="https://syedz.vercel.app/assets/2-D_JiKlq0.jpg" alt="Profile" />
          </div>

          <Profile popup={popup} handlerDark={handlerDark} setPopup={setPopup} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
