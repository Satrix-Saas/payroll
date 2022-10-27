import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/SidebarComponents/Sidebar'
import TwoColSideBar from './Admin/TwoColSideBar'
import Departments from './Admin/SidebarComponents/Departments'

import TotalRevenue from './Admin/TotalRevenue'


export default function AdminDashboard() {
  return (
    // <!-- Main Wrapper -->
    <div className="main-wrapper">
    
        {/* <!-- Header --> */}
        <div className="header">
          <AdminHeader/>        
            </div>
            <div className="sidebar">
          <Sidebar/>
          </div>
           <div className="twocolslidebar">
           <TwoColSideBar/>
           </div>
           <div className="totalrevenue">
           <TotalRevenue/>
           </div>
           
            </div>
  )
}
