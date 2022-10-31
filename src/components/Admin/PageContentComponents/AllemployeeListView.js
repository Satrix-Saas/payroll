import React from 'react'
import Sidebar from '../HeaderComponents/Sidebar'
import DashboardPageHeading from '../PageContentComponents/DashboardPageHeading'
import ListViewTable from '../../popupForms/ListViewTable'
import AdminHeader from '../AdminHeader'
import SearchFilterEmployee from './SearchFilterEmployee'
import TwoColSideBar from '../TwoColSideBar'
import AddEditEmployee from '../../popupForms/AddEditEmployee'
import DeleteEmp from '../../popupForms/DeleteEmp'
import { Link } from 'react-router-dom'

export default function AllemployeeListView() {
    
    return (
        <>

            <div className="main-wrapper">

                <AdminHeader />
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <Sidebar />
                        </div></div></div>
                <div className="two-col-bar" id="two-col-bar">
                    <TwoColSideBar />
                </div>

                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <DashboardPageHeading pageheading="Employees" pageworking="Employees" />
                                </div>
                                <div className="col-auto float-end ms-auto">
                                    <Link to="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_employee"><i className="fa fa-plus"></i> Add Employee</Link>
                                    <div className="view-icons">
                                        <Link to="/all-employees" className="grid-view btn btn-link active"><i className="fa fa-th"></i></Link>
                                        <Link to="/employees-list" className="list-view btn btn-link"><i className="fa fa-bars"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SearchFilterEmployee />
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-striped custom-table datatable">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Employee ID</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th className="text-nowrap">Join Date</th>
                                                <th>Role</th>
                                                <th className="text-end no-sort">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ListViewTable username="User Name" designation="Designation" empID="FT-0001" email="johndoe@example.com" number="9876543210" joinDate="1 Jan 2013"/>
                                            <ListViewTable username="User Name" designation="Designation" empID="FT-0002" email="johndoe@example.com" number="9876543211" joinDate="3 Jan 2013"/>
                                            <ListViewTable username="User Name" designation="Designation" empID="FT-0003" email="johndoe@example.com" number="9876543212" joinDate="5 Jan 2013"/>
                                            <ListViewTable username="User Name" designation="Designation" empID="FT-0005" email="johndoe@example.com" number="9876543213" joinDate="8 Jan 2013"/>
                                            <ListViewTable username="User Name" designation="Designation" empID="FT-0009" email="johndoe@example.com" number="9876543214" joinDate="12 Jan 2013"/>
                                            <ListViewTable username="User Name" designation="Designation" empID="FT-0006" email="johndoe@example.com" number="9876543215" joinDate="13 Jan 2013"/>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="add_employee" className="modal custom-modal fade" role="dialog">
                        <AddEditEmployee action="Add Employee" Fname="First Name" Lname="Last Name" username="Username" email="Email" password="Password" confirm="Confirm Password" empID="Employee Id" joiningDate="Joining Date" number="Phone" submit="Submit" />
                    </div>
                    <div id="edit_employee" className="modal custom-modal fade" role="dialog">
                        <AddEditEmployee action="Edit Employee" Fname="First Name" Lname="Last Name" username="Username" email="Email" password="Password" confirm="Confirm Password" empID="Employee Id" joiningDate="Joining Date" number="Phone" submit="Save" />
                    </div>
                    <div className="modal custom-modal fade" id="delete_employee" role="dialog">
                        <DeleteEmp />
                    </div>
                </div>

            </div>

        </>
    )
}
