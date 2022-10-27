import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/SidebarComponents/Sidebar'
import TwoColSideBar from './Admin/TwoColSideBar'
import TotalRevenue from './Admin/TotalRevenue'

export default function AdminDashboard() {
  return (
    // <!-- Main Wrapper -->
    <div className="main-wrapper">

    <AdminHeader/>
         <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="two-col-bar" id="two-col-bar">
        <TwoColSideBar />
      </div>

    	<div className="page-wrapper">
        <div className="content container-fluid">
          <div className="twocolslidebar">
            <TotalRevenue />
          </div>

        </div>
      </div>
    </div>
  )
}
