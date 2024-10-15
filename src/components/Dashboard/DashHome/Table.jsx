import React from 'react';
import './table.css';

const Table = () => {
    const tableData = [
        { name: 'Prem Shahi', email: 'premshahi@gmail.com', joined: '2023', type: 'New', status: 'Liked' },
        { name: 'Deepa', email: 'deepachand@gmail.com', joined: '2022', type: 'Member', status: 'Liked' },
        { name: 'Manisha', email: 'manishachand@gmail.com', joined: '2024', type: 'Member', status: 'Liked' },
    ];

    return (
        <div className="table-container">
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.joined}</td>
                            <td>{row.type}</td>
                            <td>{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
