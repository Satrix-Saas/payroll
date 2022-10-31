import React from 'react'

export default function Progressbar(props) {
  return (
    <div className="stats-info">
    <p>{props.heading} <strong>{props.obtained} <small>{props.overall}</small></strong></p>
    <div className="progress">
        <div className={props.barbgcolor} role="progressbar" style={props.style} aria-valuenow={props.barvalue} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>
  )
}
