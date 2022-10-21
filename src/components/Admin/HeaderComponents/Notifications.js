import React from 'react'
import { Link } from 'react-router-dom'
import NotificationMessageDropdown from '../../utility/NotificationMessageDropdown'


export default function Notifications() {
	const preventDefault = (e)=>{
        e.preventDefault();
    }
	return (
		<li className="nav-item dropdown" id="notificationItem">
			<Link to="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
			<i className="fa fa-bell" id="faitem"></i> <span className="badge rounded-pill">3</span>
			</Link>
			<div className="dropdown-menu notifications">
				<div className="topnav-dropdown-header">
					<span className="notification-title">Notifications</span>
					<Link to={preventDefault} className="clear-noti"> Clear All </Link>
				</div>
				<div className="noti-content">
					<ul className="notification-list">
						<NotificationMessageDropdown name="client1" task="Added a new task" description="Description about task" />
						<NotificationMessageDropdown name="client2" task="Added a new task" description="Description about task" />
						<NotificationMessageDropdown name="client3" task="Added a new task" description="Description about task" />
						<NotificationMessageDropdown name="client4" task="Added a new task" description="Description about task" />
						<NotificationMessageDropdown name="client5" task="Added a new task" description="Description about task" />
					</ul>
				</div>
				<div className="topnav-dropdown-footer">
					<Link to="activities.html">View all Notifications</Link>
				</div>
			</div>
		</li>

	)
}
