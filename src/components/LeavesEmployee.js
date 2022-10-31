import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import Addleave from './popupForms/Addleave'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import TwoColSideBar from './Admin/TwoColSideBar'
import Cardleaves from './common_component/Cardleaves'
import Tablescontent from './utility/Tablescontent'

export default function LeavesEmployee() {
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
                            <Cardleaves heading="Annual Leave" numbers="12"/>
                            <Cardleaves heading="Medical Leave" numbers="3"/>
                            <Cardleaves heading="Other Leave" numbers="4"/>
                            <Cardleaves heading="Remaining Leave" numbers="5"/>
                        </div>
                        <Tablescontent/>
                    </div>
                </div>
                <div id="add_leave" className="modal custom-modal fade" role="dialog">
                    <Addleave/>
                </div>
            </div>
        
        </>
    )
}
