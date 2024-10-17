import React, { useEffect, useState, useRef } from 'react';
import "./Topbar.css"; // Separate CSS for navbar
import Profile from '../Profile/Profile';

const Navbar = ({ navHandler, handlerDark }) => {
  const [popup, setPopup] = useState(false);
  const profileBoxRef = useRef(null);  // Ref for the profile box (avatar)
  const profileRef = useRef(null);     // Ref for the profile popup

  const handlerPop = () => {
    setPopup(!popup);  // Toggle popup
  };

  const handleClickOutside = (event) => {
    // Check if click is outside both the profile box and profile popup
    if (
      profileBoxRef.current &&
      !profileBoxRef.current.contains(event.target) &&  // If click is outside profile box
      profileRef.current &&
      !profileRef.current.contains(event.target)        // And outside profile popup
    ) {
      setPopup(false);  // Close popup if click is outside
    }
  };

  // Effect to handle adding/removing the event listener
  useEffect(() => {
    if (popup) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove the event listener on unmount
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

          {/* Profile Popup */}
          <Profile 
            popup={popup} 
            handlerDark={handlerDark} 
            setPopup={setPopup} 
            popupRef={profileRef}  // Pass ref to the Profile component
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
