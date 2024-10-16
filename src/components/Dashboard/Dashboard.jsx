import React, { useEffect, useState } from 'react';
import './dashboard.css';
import Navbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = ({ children }) => {
    // Set the initial dark mode based on localStorage synchronously
    const [isDark, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const [sidebar, setSidebar] = useState(() => localStorage.getItem('status') === 'close');

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            document.body.classList.toggle('dark', newMode);
            return newMode;
        });
    };

    const toggleSidebar = () => {
        setSidebar((prevStatus) => {
            const newStatus = !prevStatus;
            localStorage.setItem('status', newStatus ? 'close' : 'open');
            return newStatus;
        });
    };

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

   

    return (
        <div className={`wrapper ${isDark ? 'dark' : ''}`}>
            <Sidebar sidebar={sidebar} />
            <section className="dashboard">
                <Navbar
                    navHandler={toggleSidebar}
                    handlerDark={toggleDarkMode}
                />
                <div className="dash-content">{children}</div>
            </section>
        </div>
    );
};

export default Dashboard;
