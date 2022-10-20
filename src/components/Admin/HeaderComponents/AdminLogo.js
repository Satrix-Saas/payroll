import React from 'react'
import logo from '../../../images/logo.png';
import logo2 from '../../../images/logo2.png'
import { Link } from "react-router-dom";


export default function AdminLogo(props) {
    let mystyle={
        height:50,
        width:50,
    }
    return (

        <div className="header-left">
            <Link to={props.dashboard} className="logo">
                <img src={logo} style={mystyle} />
            </Link>
            <Link to={props.dashboard} className="logo2">
                <img src={logo2} style={mystyle}/>
            </Link>
        </div>
    )
}
