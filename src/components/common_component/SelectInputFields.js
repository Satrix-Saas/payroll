import React from 'react'

export default function SelectInputFields(props) {
    return (
        <div className="form-group">
            <label >{props.label}
                <span className="mandatory">{props.mandatory}</span>
            </label>
            <select className='form-control form-select' id={props.select_id} name={props.name}>
                <option value="--">--</option>
                {props.children}
            </select>
        </div>
    )
}

