import React from 'react'

export default function AdminHeading(props) {
  return (
    
    <div className="page-header">
    <div className="row">
      <div className="col-sm-12">
        <h3 className="page-title">Welcome{props.admin}</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item active">{props.dashboard}</li>
        </ul>
      </div>
    </div>
  </div>
  )
}
