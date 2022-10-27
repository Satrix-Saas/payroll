import React from 'react'

export default function PageChartCard(props) {
    return (
        <div className="col-md-6 text-center">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{props.charttitle}</h3>
                    <div id={props.chartid}></div>
                </div>
            </div>
        </div>
    )
}
