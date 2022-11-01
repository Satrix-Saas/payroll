import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomPolicy(props) {
    return (
        <>
            <div className="custom-policy">
                <div className="leave-header">
                    <div className="title">Custom policy</div>
                    <div className="leave-action">
                        <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#add_custom_policy"><i className="fa fa-plus"></i> Add custom policy</button>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-nowrap leave-table mb-0">
                        <thead>
                            <tr>
                                <th className="l-name">Name</th> 
                                <th className="l-days">Days</th>
                                <th className="l-assignee">Assignee</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.name}</td>
                                <td>{props.days}</td>
                                <td>
                                    <Link to="#" className="avatar"><img alt="" src=""/></Link>
                                    <Link to="#">{props.assignee}</Link>
                                </td>
                                <td className="text-end">
                                    <div className="dropdown dropdown-action">
                                        <Link aria-expanded="false" data-bs-toggle="dropdown" className="action-icon dropdown-toggle" to="#"><i className="material-icons">more_vert</i></Link>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_custom_policy"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                                            <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_custom_policy"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
