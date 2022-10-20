import React from 'react'
import { Link } from 'react-router-dom'

export default function MessageDropdown(props) {
    return (
        <li className="notification-message">
            <Link to="chat.html">
                <div className="list-item">
                    <div className="list-left">
                        <span className="avatar">
                            <img alt="" src={props.avatar}/>
                        </span>
                    </div>
                    <div className="list-body">
                        <span className="message-author">{props.author}</span>
                        <span className="message-time">{props.time}</span>
                        <div className="clearfix"></div>
                        <span className="message-content">{props.content}</span>
                    </div>
                </div>
            </Link>
        </li>

    )
}
