import React from 'react'
import MessageDropdown from '../../utility/MessageDropdown'
import { Link } from 'react-router-dom'
import avatar9 from '../../../images/Avatars/avatar-09.jpg'

export default function Messages() {
  const preventDefault = (e)=>{
    e.preventDefault();
}
  return (
    <>
    <li className="nav-item dropdown">
      <Link href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
        <i className="fa fa-comment"></i> <span className="badge rounded-pill">8</span>
      </Link>
      <div className="dropdown-menu notifications">
        <div className="topnav-dropdown-header">
          <span className="notification-title">Messages</span>
          <Link to={preventDefault} className="clear-noti"> Clear All </Link>
        </div>
        <div className="noti-content">
          <ul className="notification-list">
            <MessageDropdown avatar={avatar9} author="Author Name" time="8:00 AM" content="Message details"/>
            <MessageDropdown avatar={avatar9} author="Author Name" time="9:00 AM" content="Message details"/>
            <MessageDropdown avatar={avatar9} author="Author Name" time="10:00 AM" content="Message details"/>
            <MessageDropdown avatar={avatar9} author="Author Name" time="11:00 AM" content="Message details"/>
            <MessageDropdown avatar={avatar9} author="Author Name" time="12:00 AM" content="Message details"/>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
								<Link to="chat.html">View all Messages</Link>
							</div>
      </div>
    </li>
    </>
  )
}
