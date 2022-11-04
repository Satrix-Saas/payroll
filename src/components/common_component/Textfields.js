import React from 'react'
import { Link } from 'react-router-dom'

export default function Textfields(props) {

  return (
<>
<div className="form-group">
    <label>{props.label}
    <span className="mandatory">{props.mandatory}</span>
    </label>
       <input className="form-control inputfield" type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} />
       <div className='input-description' id={props.subid}>{props.content}<Link to="">{props.links}</Link></div>
 </div>

   
</>
  )
}