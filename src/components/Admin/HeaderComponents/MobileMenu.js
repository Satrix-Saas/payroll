import React from 'react'
import { Link } from 'react-router-dom'

function MobileMenu(props) {
    return (
        <div className="dropdown mobile-user-menu">
            <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
            <div className="dropdown-menu dropdown-menu-right">
                <Link className="dropdown-item" href="profile.html">My Profile</Link>
                <Link className="dropdown-item" href="settings.html">Settings</Link>
                <Link className="dropdown-item" href="index.html">Logout</Link>
            </div>
        </div>
    )
}


export default MobileMenu

