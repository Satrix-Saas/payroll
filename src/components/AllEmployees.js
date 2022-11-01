import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import SearchFilterEmployee from './Admin/PageContentComponents/SearchFilterEmployee'
import TwoColSideBar from './Admin/TwoColSideBar'
import EmployeeProfileWidget from './common_component/EmployeeProfileWidget'
import profile from '../images/Avatars/avatar-03.jpg'
import AddEditEmployee from './popupForms/AddEditEmployee'
import { Link } from 'react-router-dom'
import DeleteEmp from './popupForms/DeleteEmp'

export default function AllEmployees() {
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
                        <div className="row staff-grid-row">
                            <EmployeeProfileWidget profile={profile} profilename="Employee Name" designation="Web Developer" />
                            <EmployeeProfileWidget profile={profile} profilename="Employee Name" designation="Web Developer" />
                            <EmployeeProfileWidget profile={profile} profilename="Employee Name" designation="Web Developer" />
                            <EmployeeProfileWidget profile={profile} profilename="Employee Name" designation="Web Developer" />
                            <EmployeeProfileWidget profile={profile} profilename="Employee Name" designation="Web Developer" />
                            <EmployeeProfileWidget profile={profile} profilename="Employee Name" designation="Web Developer" />
                            <EmployeeProfileWidget profile={profile} profilename="Employee Name" designation="Web Developer" />
                            <EmployeeProfileWidget profile={profile} profilename="Employee Name" designation="Web Developer" />
                        </div>
                    </div>
                    <div id="add_employee" className="modal custom-modal fade" role="dialog">
                        <AddEditEmployee action="Add Employee" Fname="First Name" Lname="Last Name" username="Username" email="Email" password="Password" confirm="Confirm Password" empID="Employee Id" joiningDate="Joining Date" number="Phone" submit="Submit" />
                    </div>
                    <div id="edit_employee" className="modal custom-modal fade" role="dialog">
                        <AddEditEmployee action="Edit Employee" Fname="First Name" Lname="Last Name" username="Username" email="Email" password="Password" confirm="Confirm Password" empID="Employee Id" joiningDate="Joining Date" number="Phone" submit="Save" />
                    </div>
                    <div className="modal custom-modal fade" id="delete_employee" role="dialog">
                        <DeleteEmp delete="Delete"  cancel="Cancel"/>
                    </div>
                </div> 

            </div>

        </>
    )
}
