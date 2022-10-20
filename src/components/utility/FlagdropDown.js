import React from 'react'
import { Link } from 'react-router-dom'

export default function FlagdropDown(props) {
    const img_height={
        height:16,
    }
    const preventDefault = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <Link to={preventDefault} className="dropdown-item">
                <img src={props.flagimg} alt="" style={img_height} /> {props.langname}
            </Link>
        </>
    )
}
