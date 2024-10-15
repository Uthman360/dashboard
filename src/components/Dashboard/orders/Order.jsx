import React from 'react'
import "./order.css";
const Orders = () => {
    return (
        <>
         <div className="activity">
                <div className="title">
                    <i class="uil uil-shopping-cart-alt"></i>

                    <span className="text">My Orders</span>
                </div>
                <div className="activity-data">
                    <div className="data names">
                        <span className="data-title">All Orders</span>
                        <span className="data-list">In-Progress</span>
                        <span className="data-list">Deepa Chand</span>
                        <span className="data-list">Manisha Chand</span>
                        <span className="data-list">Pratima Shahi</span>
                        <span className="data-list">Man Shahi</span>
                        <span className="data-list">Ganesh Chand</span>
                        <span className="data-list">Bikash Chand</span>
                    </div>
                    <div className="data email">
                        <span className="data-title">In-Progress</span>
                        <span className="data-list">premshahi@gmail.com</span>
                        <span className="data-list">deepachand@gmail.com</span>
                        <span className="data-list">prakashhai@gmail.com</span>
                        <span className="data-list">manishachand@gmail.com</span>
                        <span className="data-list">pratimashhai@gmail.com</span>
                        <span className="data-list">manshahi@gmail.com</span>
                        <span className="data-list">ganeshchand@gmail.com</span>
                    </div>
                    <div className="data joined">
                        <span className="data-title">Delivered </span>
                        <span className="data-list">2022-02-12</span>
                        <span className="data-list">2022-02-12</span>
                        <span className="data-list">2022-02-13</span>
                        <span className="data-list">2022-02-13</span>
                        <span className="data-list">2022-02-14</span>
                        <span className="data-list">2022-02-14</span>
                        <span className="data-list">2022-02-15</span>
                    </div>
                    <div className="data type">
                        <span className="data-title">Canceled</span>
                        <span className="data-list">New</span>
                        <span className="data-list">Member</span>
                        <span className="data-list">Member</span>
                        <span className="data-list">New</span>
                        <span className="data-list">Member</span>
                        <span className="data-list">New</span>
                        <span className="data-list">Member</span>
                    </div>
                    <div className="data status">
                        <span className="data-title">Returned</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                        <span className="data-list">Liked</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders