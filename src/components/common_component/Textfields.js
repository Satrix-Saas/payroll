import React from 'react'

export default function Textfields(props) {

  return (
<>
<div className="form-group">
    <label>{props.label}
    <span className="mandatory">{props.mandatory}</span>
    </label>
       <input className="form-control" type={props.type} name={props.name} id={props.id} />
 </div>

   
</>
  )
}