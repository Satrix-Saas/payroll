import React from 'react'

export default function Radiofield(props) {
    return (
  
        <div class="form-check">
        <input class="form-check-input" type="radio" name={props.name} id={props.id}/>
        <label class="form-check-label">
        {props.value}
        </label>
      </div>
    )
}
