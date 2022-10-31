import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from '../AdminHeader'
import Sidebar from './Sidebar'
import TwoColSideBar from '../TwoColSideBar'

export default function Departments() {
  return (
       
    <div className="main-wrapper">
    
    {/* <!-- Header --> */}
    <div className="header">
      <AdminHeader/>        
        </div>
        <div className="sidebar">
      <Sidebar/>
      </div>
       <div className="twocolslidebar">
       <TwoColSideBar/>
       </div>
       
       
  
          <div className="row">
    <div className="col-md-12">
        
        <div>
            <table className="table table-striped custom-table mb-0 datatable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Department Name</th>
                        <th className="text-end">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Web Development</td>
                        <td className="text-end">
                        <div className="dropdown dropdown-action">
                                <Link href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_department"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_department"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Application Development</td>
                        <td className="text-end">
                        <div className="dropdown dropdown-action">
                                <Link href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_department"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_department"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>IT Management</td>
                        <td className="text-end">
                        <div className="dropdown dropdown-action">
                                <Link href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_department"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_department"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Accounts Management</td>
                        <td className="text-end">
                        <div className="dropdown dropdown-action">
                                <Link href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_department"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_department"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Support Management</td>
                        <td className="text-end">
                        <div className="dropdown dropdown-action">
                                <Link href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_department"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_department"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                            </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Marketing</td>
                        <td className="text-end">
                        <div className="dropdown dropdown-action">
                                <Link href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_department"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
                                <Link className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_department"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
                            </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
    </div>


    
  )
}
