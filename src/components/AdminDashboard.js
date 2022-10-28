import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import TwoColSideBar from './Admin/TwoColSideBar'
import TotalRevenue from './Admin/TotalRevenue'
import AdminHeading from './Admin/HeaderComponents/AdminHeading'
import PageStatistics from './Admin/PageContentComponents/PageStatistics'

export default function AdminDashboard() {
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
          <AdminHeading admin=" Admin!" dashboard="Dashboard " />
          <div className="twocolslidebar">
            <TotalRevenue />
            <PageStatistics />
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
