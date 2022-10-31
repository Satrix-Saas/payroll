import React from 'react'

export default function Radiofield(props) {
    return (
  
        <div className="form-check">
        <input className="form-check-input" type="radio" name={props.name} id={props.id}/>
        <label className="form-check-label">
        {props.value}
        </label>
      </div>
    )
}
