import React from 'react'
import { Link } from 'react-router-dom'

export default function DepartmentCom(props) {
    return (
        <>
            <tr>
                <td>{props.serialnum}</td>
                <td>{props.title}</td>
                <td className="text-end">
                    <div className="dropdown dropdown-action">
                        <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                        <div className="dropdown-menu dropdown-menu-right">
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_department"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                            <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_department"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}
