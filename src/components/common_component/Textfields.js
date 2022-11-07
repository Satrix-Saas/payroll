import React from 'react'
import { Link } from 'react-router-dom'

export default function Textfields(props) {

  return (
<>
<div className="form-group">
    <label>{props.label}
    <span className="mandatory">{props.mandatory}</span>
    </label>
       <input className="form-control inputfield" type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}/>
       <div className='input-description'>{props.content}<Link to="">{props.links}</Link></div>
 </div>

   
</>
  )
}