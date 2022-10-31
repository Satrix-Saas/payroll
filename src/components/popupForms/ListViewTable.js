import React from 'react'
import { Link } from 'react-router-dom'

export default function ListViewTable(props) {
    return (
        <tr>
            <td>
                <h2 className="table-avatar">
                    <Link href="profile.html" className="avatar"><img alt="" src=""/></Link>
                    <Link href="profile.html">{props.username}<span>{props.designation}</span></Link>
                </h2>
            </td>
            <td>{props.empID}</td>
            <td>{props.email}</td>
            <td>{props.number}</td>
            <td>{props.joinDate}</td>
            <td>
                <div className="dropdown">
                    <Link href="" className="btn btn-white btn-sm btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Web Developer </Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" to="#">Software Engineer</Link>
                        <Link className="dropdown-item" to="#">Software Tester</Link>
                        <Link className="dropdown-item" to="#">Frontend Developer</Link>
                        <Link className="dropdown-item" to="#">UI/UX Developer</Link>
                    </div>
                </div>
            </td>
            <td className="text-end">
                <div className="dropdown dropdown-action">
                    <Link href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_employee"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                        <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_employee"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                    </div>
                </div>
            </td>
        </tr>
    )
}
