import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import SearchFilterDate from './Admin/PageContentComponents/SearchFilterDate'
import TwoColSideBar from './Admin/TwoColSideBar'

export default function AttendanceAdmin() {
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
                                    <DashboardPageHeading pageheading="Attendance" pageworking="Attendance" />
                                </div>
                            </div>
                        </div>
                        <SearchFilterDate />
                    </div>
                </div>
            </div>
        </>
    )
}
  