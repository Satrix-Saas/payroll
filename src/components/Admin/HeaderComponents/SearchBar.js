import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchBar(props) {
	const preventDefault = (e)=>{
        e.preventDefault();
    }
	return (

		<>
			<li className="nav-item">
				<div className="top-nav-search">
					<Link to={preventDefault} className="responsive-search">
						<i className="fa fa-search"></i>
					</Link>
					<form action="/search">
						<input className="form-control" type="text" placeholder={props.placeholder}/>
							<button className="btn" type="submit"><i className="fa fa-search"></i></button>
					</form>
				</div>
			</li>
		</>
	)
}
