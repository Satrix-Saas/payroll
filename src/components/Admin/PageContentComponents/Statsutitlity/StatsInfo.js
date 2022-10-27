import React from 'react'

export default function StatsInfo(props) {
    return (
        <div className="stats-info">
            <p>Today Leave <strong>4 <small>/ 65</small></strong></p>
            <div className="progress">
                <div className={props.bgcolor} role="progressbar" style={{width:"31%"}} aria-valuenow="31" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
    )
}
