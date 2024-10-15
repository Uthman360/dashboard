import React, { useEffect, useState } from 'react';
import './dashboard.css';
import Navbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = ({ children }) => {
    const [isDark, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
    const [sidebar, setSidebar] = useState(() => localStorage.getItem('status') === 'close');
    const [popup, setPopup] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
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

  
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setDarkMode(savedTheme === 'dark');
        document.body.classList.toggle('dark', savedTheme === 'dark');
    }, [isDark]);

    useEffect(() => {
        // Update the local storage when the theme changes
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.body.classList.toggle('dark', isDark);
    }, [isDark]);


    const togglePopup = () => {
        setPopup((prevPopup) => !prevPopup);
    };

    return (
        <div className={`wrapper ${isDark ? 'dark' : ''}`}>
            <Sidebar sidebar={sidebar} />
            <section className="dashboard">
                <Navbar
                    navHandler={toggleSidebar}
                    handlerPop={togglePopup}
                    popup={popup}
                    setPopup={setPopup}
                    handlerDark={toggleDarkMode}
                />
                <div className="dash-content">{children}</div>
            </section>
        </div>
    );
};

export default Dashboard;
