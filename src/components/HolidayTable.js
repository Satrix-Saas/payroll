import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import TwoColSideBar from './Admin/TwoColSideBar'
import Tablescontent from './utility/Tablescontent'



export default function HolidayTable() {
  return (
<>

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
                                    <DashboardPageHeading pageheading="Holidays 2022" pageworking="Holidays" />
                                </div>
                                <div className="col-auto float-end ms-auto">
                                    <Link to="\addleave" className="btn add-btn active" data-bs-toggle="modal" data-bs-target="#add_leave"><i className="fa fa-plus"></i> Add Holiday</Link>
                                </div>
                                </div>
                                </div>
                                </div>
                                <Tablescontent/>
    </div>
</>
  )
}
