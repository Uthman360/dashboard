import React from 'react'

const Payment = () => {
    return (
        <div>
            <div className="activity">
                <div className="title">
                    <i class="uil uil-dollar-alt"></i>

                    <span className="text">Payment Methods
                    </span>
                </div>
            </div>
            <div className="activity" >
                <div className="title">
                    <i class="uil uil-clock-three"></i>

                    <span className="text">Add Payment Methods</span>
                </div>
                <div className="activity-data" style={{ gap: "300px", justifyContent: "flex-start" }}>
                    <div className="data names">
                        <span className="data-title">Method</span>
                        <span className="data-list">PayPal</span>

                    </div>
                    <div className="data email">
                        <span className="data-title">Expires</span>
                        <span className="data-list">premshahi@gmail.com</span>

                    </div>

                </div>
                <div class="button">
                    <span class="btn-text" user-selcect="none">Add payment method</span>
                </div>
            </div>
        </div>
    )
}

export default Payment