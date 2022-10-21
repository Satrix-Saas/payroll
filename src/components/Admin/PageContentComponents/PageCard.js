import React from 'react'

export default function PageCard(props) {
    return (
        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div className="card dash-widget">
                <div className="card-body">
                    <span className="dash-widget-icon"><i className={props.icons}></i></span>
                    <div className="dash-widget-info">
                        <h3>{props.numbers}</h3>
                        <span>{props.cardtitle}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
