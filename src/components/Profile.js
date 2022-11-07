import React from 'react'

import Sidebar from './Admin/HeaderComponents/Sidebar'
import TwoColSideBar from './Admin/TwoColSideBar'
import AdminHeader from './Admin/AdminHeader'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import Textfields from './common_component/Textfields'



export default function Profile() {
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
                                    <DashboardPageHeading pageheading="My Account" pageworking="My Account" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-10">
                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title">Basic Information</div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#"> Edit</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <Textfields label="Type" type="text" name="type" id="type" placeholder="--TYPE--" />
                                            <Textfields label="Name" type="text" name="name" id="name" placeholder="Name" />
                                            <Textfields label="Email" type="text" name="email" id="email" placeholder="Email Address" />
                                            <Textfields label="Date of hiring" type="date" name="date" id="date" />
                                            <Textfields label="Title" type="text" name="title" id="title" placeholder="--Title--" />
                                            <Textfields label="Employee ID" type="text" name="emp_id" id="emp_id" placeholder="Employee ID" />
                                            <Textfields label="Last Login" type="text" name="last_login" id="last_login" placeholder="--Last Login--" />
                                        </div>

                                    </div>

                                </div>

                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title">Compensation & Perquisites</div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#"> Edit</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <Textfields label="Annual Salary" type="text" name="annual_salary" id="annual_salary" placeholder="&#8377; 0 " />
                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title"> Leaves & Attendance</div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#"> Edit</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <Textfields label="Leaves Remaining" type="text" name="leaves_rem" id="leaves_rem" placeholder="0" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title">Past Payroll In FY 2022-2023 </div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#"> Edit</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <Textfields label="Taxable Salary" type="text" name="tax_salary" id="tax_salary" placeholder="&#8377; 0 " />
                                            <Textfields label="Exemption" type="text" name="exemption" id="exemption" placeholder="&#8377; 0 " />
                                            <Textfields label="TDS Deducted" type="text" name="tds_deduct" id="tds_deduct" placeholder="&#8377; 0 " />
                                            <Textfields label="Previous Employer(s) Taxable Salary " type="text" name="prev_emp_salary" id="prev_emp_salary" placeholder="&#8377; 0 " />
                                            <Textfields label="Previous Employer(s) TDS Deducted" type="text" name="prev_emp_tax" id="prev_emp_tax" placeholder="&#8377; 0 " />

                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title">Payment Information</div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#"> Edit</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <Textfields label="PAN " type="text" name="pan" id="pan" placeholder="--PAN--" />
                                            <Textfields label="IFSC Code" type="text" name="ifsc" id="ifsc" placeholder="--NA--" />
                                            <Textfields label="Account Number " type="text" name="acc_no" id="acc_no" placeholder="--NA--" />
                                            <Textfields label="Beneficiary Name" type="text" name="beneficiary_name" id="beneficiary_name" placeholder="Name" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title">Provident Fund, Professional Tax & ESI </div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#"> Edit</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <Textfields label="PF Status" type="text" name="pf_status" id="pf_status" placeholder="Disabled (not selected)" />
                                            <Textfields label="PF UAN" type="text" name="pf_uan" id="pf_uan" placeholder="--NA--" />
                                            <Textfields label="Professional Tax" type="text" name="pro_tax" id="pro_tax" placeholder="Company Disabled" />
                                            <Textfields label="ESIC Status" type="text" name="esic_status" id="esic_status" placeholder="Not Registered" />
                                            <Textfields label="ESIC IP Number" type="text" name="ip_num" id="ip_num" placeholder="--NA--" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title">Other Information  </div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#"> Edit</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <Textfields label="Phone Number" type="text" name="phn_num" id="phn_num" placeholder="Phone Number" />
                                            <Textfields label="Gender" type="text" name="gender" id="gender" placeholder="--NA--" />
                                            <Textfields label="Date Of Birth " type="text" name="dob" id="dob" placeholder="--NA--" />

                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title">User Role / Privileges</div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#"> Assign New Privileges</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <Textfields label="Privileges" type="text" name="privliges" id="privliges" placeholder="	Administrator" />

                                        </div>
                                    </div>
                                </div>

                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
