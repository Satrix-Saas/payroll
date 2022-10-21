import React from 'react'
import { Link } from 'react-router-dom';
import Us from "../../../images/flags/us.png";
import Fr from "../../../images/flags/fr.png";
import Es from "../../../images/flags/es.png";
import De from "../../../images/flags/de.png";
import FlagdropDown from '../../utility/FlagdropDown';


export default function Flag(props) {
  return (
   <>
	<li className="nav-item dropdown has-arrow flag-nav" id="flagItem">
	<Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button">
		<img src={Us} alt="" height="20"/> <span id="flagname">{props.langname}</span>
	</Link>
	<div className="dropdown-menu dropdown-menu-right">
		<FlagdropDown  flagimg={Us} langname="English"/>
		<FlagdropDown  flagimg={Fr} langname="French"/>
		<FlagdropDown flagimg={Es} langname="Spanish"/>
		<FlagdropDown flagimg={De} langname="German"/>
		</div>
		</li>
		</>
  )
}
