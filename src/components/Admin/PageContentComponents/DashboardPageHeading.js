import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardPageHeading(props) {
    return (
        <>
            <h3 className="page-title">{props.pageheading}</h3>
            <ul className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/admindashboard">Dashboard</Link></li>
                <li className="breadcrumb-item active">{props.pageworking}</li>
            </ul>

        </>
    )
}
