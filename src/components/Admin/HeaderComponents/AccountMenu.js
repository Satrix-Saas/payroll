import React from 'react'
import { Link } from 'react-router-dom'
import avatar21 from '../../../images/Avatars/avatar-21.jpg'

export default function AccountMenu(props) {
  return (
    <li class="nav-item dropdown has-arrow main-drop">
      <Link href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <span class="user-img">
          <img src={avatar21} alt="" />
          <span class="status online"></span></span>
        <span>Admin</span>
      </Link>
      <div class="dropdown-menu">
        <Link class="dropdown-item" href="profile.html">{props.profile}</Link>
        <Link class="dropdown-item" href="settings.html">{props.setting}</Link>
        <Link class="dropdown-item" href="index.html">{props.logout}</Link>
      </div>
    </li>

  )
}
