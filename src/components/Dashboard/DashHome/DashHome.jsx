import React from 'react';
import Chart from '../HeaderMenu/HeaderMenu';
import { CircularProgressbar } from 'react-circular-progressbar';
import { FaBook, FaBookReader, FaDollarSign } from 'react-icons/fa';
import Updates from '../Update/Update';
import CustomerReview from '../CustomerReview/CustomerReview';
import Table from './Table';
import './Dash.css';

const DashHome = () => {
    const stats = [
        { value: 70, label: "Sales", icon: FaDollarSign, amount: "$25,970" },
        { value: 80, label: "Revenue", icon: FaBook, amount: "$14,270" },
        { value: 60, label: "Expenses", icon: FaBookReader, amount: "$4,270" },
    ];

    return (
        <div className="dash-content">
            <div className="overview">
                <div className="title">
                    <i className="uil uil-tachometer-fast-alt" id="activity" />
                    <span className="text">Dashboard</span>
                </div>

                <div className="boxes">
                    {stats.map(({ value, label, icon: Icon, amount }, index) => (
                        <div key={index} className={`box box${index + 1}`}>
                            <div className="radialBar">
                                <CircularProgressbar value={value} text={`${value}%`} />
                                <span>{label}</span>
                            </div>
                            <div className="detail">
                                <Icon />
                                <span>{amount}</span>
                                <span>Last 24 hours</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="middle">
                <Updates />
                <Chart />
            </div>

            <div className="last">
                <div className="tables">
                    <div className="activity">
                        <div className="title">
                            <i className="uil uil-clock-three" />
                            <span className="text">Recent Activity</span>
                        </div>
                        <Table />
                    </div>
                </div>

                <div className="customer">
                    <div className="title">
                        <span className="custom_text">Customer Review</span>
                    </div>
                    <CustomerReview />
                </div>
            </div>
        </div>
    );
};

export default DashHome;
