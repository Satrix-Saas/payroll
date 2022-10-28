import React from 'react'
import { Link } from 'react-router-dom'

export default function EmployeeProfileWidget(props) {
    return (
        <>
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div className="profile-widget">
                    <div className="profile-img">
                        <Link to="profile.html" className="avatar">
                            <img src={props.profile} alt=""/></Link>
                    </div>
                    <div className="dropdown profile-action">
                        <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                        </div>
                    </div>
                    <h4 className="user-name m-t-10 mb-0 text-ellipsis"><Link to="profile.html">{props.profilename}</Link></h4>
                    <div className="small text-muted">{props.designation}</div>
                </div>
            </div>
        </>
    )
}
