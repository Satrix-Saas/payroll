import React from 'react'

export default function PageHeader(props) {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">{props.pagetitle}</h3>
          <ul className="breadcrumb">F
            <li className="breadcrumb-item active">{props.pageactive}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
