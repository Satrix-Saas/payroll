import React from 'react'
import { Link } from 'react-router-dom'
import avatar21 from '../../../images/Avatars/avatar-21.jpg'

export default function AccountMenu(props) {
  return (
    <li className="nav-item dropdown has-arrow main-drop" id="NavItemDrop">
      <Link href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <span className="user-img">
          <img src={avatar21} alt="" />
          <span className="status online"></span></span>
        <span>Admin</span>
      </Link>
      <div className="dropdown-menu">
        <Link className="dropdown-item" href="profile.html">{props.profile}</Link>
        <Link className="dropdown-item" href="settings.html">{props.setting}</Link>
        <Link className="dropdown-item" href="index.html">{props.logout}</Link>
      </div>
    </li>

  )
}
