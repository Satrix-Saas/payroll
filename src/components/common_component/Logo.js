import React from 'react'
import logo from '../../images/satrixlogo.png'
import { Link } from "react-router-dom";
export default function Logo(props) {
  return (

      <div className="account-logo">
        <Link to={props.dashboard}><img src={logo} alt="Logo"/></Link>
      </div>
         
 
  )
}
