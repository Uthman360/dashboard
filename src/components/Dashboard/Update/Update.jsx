import React from "react";
import "./Update.css";
export const UpdatesData = [
  {
    img: "https://react-admin-dashboard-public.vercel.app/static/media/img1.a0fca9c51749c1ee3db5.png",
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: "https://react-admin-dashboard-public.vercel.app/static/media/img2.f5f922c9b93eaf2c4065.png",
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: "https://react-admin-dashboard-public.vercel.app/static/media/img3.6b1484548ee065fd59b5.png",
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
const Updates = () => {
  return (
    <div className="Updates">
      <div className="title_u">
        <span className="custom_text">Updates
        </span>
      </div >
      {
        UpdatesData.map((update) => {
          return (
            <div className="update">
              <img src={update.img} alt="profile" />
              <div className="noti">
                <div style={{ marginBottom: '0.5rem' }}>
                  <span>{update.name}</span>
                  <span> {update.noti}</span>
                </div>
                <span>{update.time}</span>
              </div>
            </div>
          );
        })
      }
    </div >
  );
};

export default Updates;