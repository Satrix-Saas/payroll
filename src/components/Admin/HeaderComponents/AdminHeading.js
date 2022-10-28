import React from 'react'

export default function AdminHeading(props) {
  return (
    
    <div ClassName="page-header">
    <div ClassName="row">
      <div ClassName="col-sm-12">
        <h3 ClassName="page-title">Welcome{props.admin}</h3>
        <ul ClassName="breadcrumb">
          <li ClassName="breadcrumb-item active">{props.dashboard}</li>
        </ul>
      </div>
    </div>
  </div>
  )
}
