import React, { useState } from 'react';
import Chart from 'react-apexcharts'; // Import the Chart component
import './HeaderMenu.css';

export const userData = [
    { name: "Jan", "Earning": 4000, "Amount": 100 },
    { name: "Feb", "Earning": 3000, "Amount": 80 },
    { name: "Mar", "Earning": 5000, "Amount": 60 },
    { name: "Apr", "Earning": 4000, "Amount": 40 },
    { name: "May", "Earning": 3000, "Amount": 20 },
    { name: "Jun", "Earning": 2000, "Amount": 0 },
];

function EarningsChart() {
    const lastSixMonthsData = userData.slice(-6);

    const [chartData, setChartData] = useState({
        series: [
            {
                name: "Earnings",
                data: lastSixMonthsData.map(data => data.Earning), // Get earnings for the last 6 months
            },
        ],
        options: {
            chart: {
                type: 'area',
            },
          
            dataLabels: {
                enabled: false, // Disable data labels
            },
           
            tooltip: {
                x: {
                    format: 'MMM dd', // Format x-axis labels as Month Day
                },
                style: {
                    backgroundColor:"#000 !important",
                    fontSize:"15px"
                   
                  },
              
            },
            grid: {
                show: false, // Disable grid lines
            },
            xaxis: {
                categories: lastSixMonthsData.map(data => data.name), // Get last 6 month names for x-axis
                type: 'category', // Use category type for x-axis
            },
            yaxis: {
                show: true, // Show y-axis
            },
            toolbar: {
                show: false, // Disable toolbar
            },
        },
    });

    return (
        <div className="main_chart" >
            <h3 className="chartTitle">Earnings</h3>
            <div className="chart">
                <Chart options={chartData.options} series={chartData.series} height={200} type="area" />
            </div>
        </div>
    );
}

export default EarningsChart;
