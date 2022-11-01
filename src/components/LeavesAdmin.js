import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import SearchFilterAdminLeave from './Admin/PageContentComponents/SearchFilterAdminLeave'
import TwoColSideBar from './Admin/TwoColSideBar'
import Cardleaves from './common_component/Cardleaves'
import AddEditLeave from './popupForms/AddEditLeave'
import DeleteEmp from './popupForms/DeleteEmp'
import Tablescontent from './utility/Tablescontent'

export default function LeavesAdmin() {
    //window. location. reload(false); 
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
                                    <DashboardPageHeading pageheading="Leaves" pageworking="Leaves" />
                                </div>
                                <div className="col-auto float-end ms-auto">
                                    <Link to="\addleave" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_leave"><i className="fa fa-plus"></i> Add Leave</Link>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <Cardleaves heading="Today Presents" numbers="12 / 60" />
                            <Cardleaves heading="Planned Leaves" numbers="8" Outof="Today" />
                            <Cardleaves heading="Unplanned Leaves" numbers="0" Outof="Today" />
                            <Cardleaves heading="Pending Requests Leave" numbers="5" />
                        </div>
                        <SearchFilterAdminLeave />
                        <Tablescontent />
                    </div>
                    <div id="add_leave" className="modal custom-modal fade" role="dialog">
                        <AddEditLeave submit="Submit" action="Add Leave" />
                    </div>
                    <div id="edit_leave" className="modal custom-modal fade" role="dialog">
                        <AddEditLeave submit="Save" action="Edit Leave" />
                    </div>
                    <div className="modal custom-modal fade" id="delete_approve" role="dialog">
                        <DeleteEmp delete="Approve"  cancel="Decline"/>
                    </div>
                </div>

            </div>

        </>
    )
}
