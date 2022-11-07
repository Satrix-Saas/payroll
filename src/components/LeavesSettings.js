import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import TwoColSideBar from './Admin/TwoColSideBar'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import ToggleButton from './common_component/ToggleButton'
import LeaveSettingInput from './common_component/LeaveSettingInput'
import Carryforward from './common_component/LeaveSettingCarryforward'
import EarnedLeaves from './EarnedLeaves'
import CustomPolicy from './common_component/CustomPolicy'
import AddEditCustomPolicy from './popupForms/AddEditCustomPolicy'
import DeleteEmp from './popupForms/DeleteEmp'


export default function LeavesSettings() {
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
                                    <DashboardPageHeading pageheading="Leave Settings" pageworking="Leave Settings" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="card leave-box" id="leave_annual">
                                    <div className="card-body">
                                        <ToggleButton cardTitle="Annual" id="switch_annual" for="switch_annual" checked="checked" />
                                        <div className="leave-item">
                                            <LeaveSettingInput label="Days" type="text" editbtn="Edit" />
                                            <Carryforward />
                                            <EarnedLeaves heading="Earned Leaves" Option1="No" Option2="Yes" edit="Edit" />
                                        </div>
                                        <CustomPolicy name="5 years of service" days="5" assignee="Name" />
                                    </div>
                                </div>

                                <div className="card leave-box" id="leave_sick">
                                    <div className="card-body">
                                        <ToggleButton cardTitle="Sick" id="switch_sick" for="switch_sick" checked="checked" />
                                        <div className="leave-item">
                                            <LeaveSettingInput label="Days" type="text" editbtn="Edit" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="leave_hospitalisation">
                                    <div className="card-body">
                                        <ToggleButton cardTitle="Hospitalisation" id="switch_hospitalisation" for="switch_hospitalisation" />
                                        <div className="leave-item">
                                            <LeaveSettingInput label="Days" type="text" editbtn="Edit" />
                                        </div>
                                        <CustomPolicy name="5 years of service" days="5" assignee="Name" />
                                    </div>
                                </div>

                                <div className="card leave-box" id="leave_maternity">
                                    <div className="card-body">
                                        <ToggleButton cardTitle="Maternity Assigned to female only" id="switch_maternity" for="switch_maternity" checked="checked" />
                                        <div className="leave-item">
                                            <LeaveSettingInput label="Days" type="text" editbtn="Edit" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="leave_paternity">
                                    <div className="card-body">
                                        <ToggleButton cardTitle="Paternity Assigned to male only" id="switch_paternity" for="switch_paternity"/>
                                        <div className="leave-item">
                                            <LeaveSettingInput label="Days" type="text" editbtn="Edit" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card leave-box" id="leave_custom01">
                                    <div className="card-body">
                                        <ToggleButton cardTitle="Custom Leave" id="switch_custom01" for="switch_custom01"/>
                                       
                                        <div className="leave-item">
                                            <LeaveSettingInput label="Days" type="text" editbtn="Edit" />
                                            <Carryforward />
                                            <EarnedLeaves heading="Earned Leaves" Option1="No" Option2="Yes" edit="Edit" />
                                        </div>
                                        <CustomPolicy name="5 years of service" days="5" assignee="Name" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div id="add_custom_policy" className="modal custom-modal fade" role="dialog">
                    <AddEditCustomPolicy heading="Add Custom Policy"/>
                </div>
                <div id="edit_custom_policy" className="modal custom-modal fade" role="dialog">
                    <AddEditCustomPolicy heading="Edit Custom Policy"/>
                </div>
                <div className="modal custom-modal fade" id="delete_custom_policy" role="dialog">
                    <DeleteEmp delete="Delete" cancel="Cancel"/>
                </div>
            </div>

        </>
    )
}
