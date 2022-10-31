import React from 'react'

export default function Cardleaves(props) {
    return (
        <div className="col-md-3">
            <div className="stats-info">
                <h6>{props.heading}</h6>
                <h4>{props.numbers}<span>{props.Outof}</span></h4>
            </div>
        </div>
    )
}
