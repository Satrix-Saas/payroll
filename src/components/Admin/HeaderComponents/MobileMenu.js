import React from 'react'
import { Link } from 'react-router-dom'

function MobileMenu(props) {
    return (
        <div class="dropdown mobile-user-menu">
            <Link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                aria-expanded="false"><i class="fa fa-ellipsis-v"></i></Link>
            <div class="dropdown-menu dropdown-menu-right">
                <Link class="dropdown-item" href="profile.html">My Profile</Link>
                <Link class="dropdown-item" href="settings.html">Settings</Link>
                <Link class="dropdown-item" href="index.html">Logout</Link>
            </div>
        </div>
    )
}


export default MobileMenu

