import React, { useState } from 'react'

const License = () => {
    const [licenses,setLicences] = useState(false)
    return (
        <div>
            <div className="activity">
                <div className="title">
                    <i className="uil uil-copy-landscape" style={{background:!licenses?
                        "red":""}}></i>

                    <span className="text">No licenses available yet
                    </span>
                </div>
            </div>
        </div>)
}

export default License