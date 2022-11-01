import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import TwoColSideBar from './Admin/TwoColSideBar'
import ExternalCredentials from './common_component/ExternalCredentials'
import LeaveSettingInput from './common_component/LeaveSettingInput'
import EarnedLeaves from './EarnedLeaves'
import EditCredentials from './popupForms/EditCredentials'

export default function CompanyDetails() {
    document.title = "Company Details";
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
                                    <DashboardPageHeading pageheading="Company Details" pageworking="Company Details" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="h3 card-title">Company Logo</div>
                                        <div className="leave-item">
                                            <LeaveSettingInput label="Company Logo" type="file" editbtn="Edit" />
                                        </div>

                                    </div>
                                </div>

                                <div className="card leave-box" id="tax_setup">
                                    <div className="card-body">
                                        <div className="h3 card-title">Tax Setup</div>
                                        <div className="leave-item">
                                            <LeaveSettingInput label="PAN" type="text" editbtn="Edit" placeholder="--NA--" />
                                            <LeaveSettingInput label="TAN" type="text" editbtn="Edit" placeholder="--NA--" />
                                            <LeaveSettingInput label="GSTIN" type="text" editbtn="Edit" placeholder="--NA--" />
                                        </div>

                                    </div>
                                </div>
                                <div className="card leave-box" id="kyc">
                                    <div className="card-body">
                                        <div className="h3 card-title">KYC</div>
                                        <div className="leave-item">
                                            <LeaveSettingInput label="KYC Status" type="text" editbtn="Edit" placeholder="Verification not initiated" />
                                        </div>

                                    </div>
                                </div>

                                <div className="card leave-box" id="pf_status">
                                    <div className="card-body">
                                        <div className="h3 card-title">Provident Fund / ESIC / Professional Tax / LWF</div>
                                        <div className="leave-item">
                                            <EarnedLeaves heading="PF Status" Option1="Enabled" Option2="Disabled" edit="Edit" />
                                            <EarnedLeaves heading="ESIC Status Status" Option1="Enabled" Option2="Disabled" edit="Edit" />
                                            <EarnedLeaves heading="PT Status" Option1="Enabled" Option2="Disabled" edit="Edit" />
                                            <EarnedLeaves heading="PF Status" Option1="Enabled" Option2="Disabled" edit="Edit" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="leave_annual">
                                    <div className="card-body">
                                        <div className="leave-header">
                                            <div className="h3 card-title">External Credentials</div>
                                            <div className="leave-action">
                                                <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#edit_cred"><i className="fa fa-pencil m-r-5"></i> Edit</button>
                                            </div>
                                        </div>
                                        <div className="leave-item">
                                            <ExternalCredentials label="TRACES" placeholder="Not Set" disabled="disabled"/>
                                            <ExternalCredentials label="PF" placeholder="Not Set" disabled="disabled"/>
                                            <ExternalCredentials label="ESIC" placeholder="Not Set" disabled="disabled" />
                                            <ExternalCredentials label="PT" placeholder="Not Set" disabled="disabled"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="edit_cred" className="modal custom-modal fade" role="dialog">
                    <EditCredentials heading="Edit External Credentials Details"/>
                </div>
                </div>
            </div>
        </>
    )
}

