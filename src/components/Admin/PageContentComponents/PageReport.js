import React from 'react'

export default function PageReport(props) {
  
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <span className="d-block">{props.reporttitle}</span>
                    </div>
                    <div>
                        <span className={props.textcolor}>{props.percent}</span>
                    </div>
                </div>
                <h3 className="mb-3">{props.currentValue}</h3>
                <div className="progress mb-2" style={{height: "5px"}}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: "70%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mb-0">{props.previous} <span className="text-muted">{props.prevValue}</span></p>
            </div>
        </div>
    )
}
