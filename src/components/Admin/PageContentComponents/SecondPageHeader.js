import React from 'react'
import { Link } from 'react-router-dom'


export default function SecondPageHeader(props) {
  return (
    <>
      <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">{props.PageTitle}</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="admin-dashboard.html">Dashboard</Link></li>
                                <li className="breadcrumb-item active">{props.activePagetitle}</li>
                            </ul>
                        </div>
                        <div className="col-auto float-end ms-auto">
                            <Link to="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_leave"><i className="fa fa-plus"></i> {props.btnItem}</Link>
                        </div>
                    </div>
                </div>
    </>
  )
}
