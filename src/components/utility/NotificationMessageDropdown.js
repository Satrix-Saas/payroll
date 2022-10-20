import React from 'react'
import { Link } from 'react-router-dom'
import avatar2 from'../../images/Avatars/avatar-02.jpg'

export default function NotificationMessageDropdown(props) {
    return (
        <li className="notification-message">
            <Link to="activities.html">
                <div className="media d-flex">
                    <span className="avatar flex-shrink-0">
                        <img alt="" src={avatar2}/>
                    </span>
                    <div className="media-body flex-grow-1">
                        <p className="noti-details"><span className="noti-title">{props.name}</span>{props.task}<span className="noti-title">{props.description}</span></p>
                        <p className="noti-time"><span className="notification-time">{props.time}ago</span></p>
                    </div>
                </div>
            </Link>

        </li>
    )
}
