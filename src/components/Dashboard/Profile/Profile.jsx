import { Link } from 'react-router-dom';
import './Profile.css';
import profile from '../../../assets/images/profile.png';
import settings from '../../../assets/images/setting.png';
import help from '../../../assets/images/help.png';
import { IoIosArrowForward } from 'react-icons/io';

const Profile = ({ popup, handlerDark, setPopup,popupRef }) => {


  const handleLinkClick = () => {
    setPopup(false); // Close popup when a link is clicked
  };

  return (
    <>
      {popup && (
        <>
          {/* Overlay */}
          <div className="sub_menu_wrap" ref={popupRef}>
            <div className="sub_menu">
              <div className="user_info">
                <img src="https://syedz.vercel.app/assets/2-D_JiKlq0.jpg" alt="" />
                <div className="user_e">
                  <h2>zeeshan-syed</h2>
                  <a href="#">zeeshan1dreamso@gmail.com</a>
                </div>
              </div>

              <hr />
              <Link to="/edit" className='sub_menu_link' onClick={handleLinkClick}>
                <img src={profile} alt="" />
                <p>Edit Profile</p>
                <span> <IoIosArrowForward /> </span>
              </Link>
              <a href="#" className='sub_menu_link' onClick={handleLinkClick}>
                <img src={settings} alt="" />
                <p>Settings & Privacy</p>
                <span> <IoIosArrowForward /> </span>
              </a>
              <Link to="/support" className='sub_menu_link' onClick={handleLinkClick}>
                <img src={help} alt="" />
                <p>Help & Support</p>
                <span> <IoIosArrowForward /> </span>
              </Link>
              <hr />
              <div className="logout">
                <ul className="logout-mode">
                  <li className="mode">
                    <a href="#">
                      <i className="uil uil-moon"></i>
                      <span className="link-name">Dark Mode</span>
                    </a>

                    <div className="mode-toggle" onClick={handlerDark}>
                      <span className="switch"></span>
                    </div>
                  </li>
                  <li className='sign_out'>
                    <a href="#">
                      <i className="uil uil-signout"></i>
                      <span className="link-name">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
