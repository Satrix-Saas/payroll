import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import CardattStats from './Admin/PageContentComponents/Cardatt-Stats'
import CardpunchStatus from './Admin/PageContentComponents/CardpunchStatus'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import PunchActivity from './Admin/PageContentComponents/PunchActivity'
import SearchFilterDate from './Admin/PageContentComponents/SearchFilterDate'
import TwoColSideBar from './Admin/TwoColSideBar'

export default function AttendanceEmployee() {
    return (
        // <!-- Main Wrapper -->
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
                        <div className='row'>
                            <CardpunchStatus date="11 Mar 2019" PunchinDateTime="Wed, 11th Mar 2019 10.00 AM" punchhrs="3.45 hrs" breaktimehrs="1.21 hrs" overtimehrs="3 hrs" />
                            <CardattStats />
                            <PunchActivity />
                        </div>
                        <SearchFilterDate />

                    </div>
                </div>
            </div>
        </>
    )
}
  