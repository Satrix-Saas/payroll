import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from '../Admin/AdminHeader'
import Sidebar from '../Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from '../Admin/PageContentComponents/DashboardPageHeading'
import TwoColSideBar from '../Admin/TwoColSideBar'


export default function RunPayRoll() {
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
                  <DashboardPageHeading pageheading="Run PayRoll"  pageworking="Run PayRoll" />
                </div>
              </div>
            </div>
            <div id="rPr1"> <p>Please complete your organization's <Link to="https://payroll.razorpay.com/companyOnboarding?step=5&amp;redirect=%2FrunPayroll">KYC</Link>. Payroll execution is disabled</p></div>
            <div id="rPr2"> <p>We do not have any payroll data for you. Perhaps you need to <Link to="https://payroll.razorpay.com/employeeOnboarding?add=1&amp;type=employee">add</Link> some employees, or <Link to="https://payroll.razorpay.com/people">set</Link> set their salaries?</p></div>
       
          </div>
        </div>
      </div>
    </>
  )
}
