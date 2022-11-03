import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const style = { display: "none" };
  return (

    <>

      <nav className="greedys sidebar-horizantal">
        <ul className="list-inline-item list-unstyled links">
          <li className="menu-title">
            <span>Main</span>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-dashboard"></i> <span> Dashboard</span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="/admindashboard"> Dashboard</Link></li>
              {/* <li><Link to="/basicdetails">Employee Dashboard</Link></li> */}
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-cube"></i> <span> Apps</span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="chat.html">Chat</Link></li>
              <li className="submenu">
                <Link to="#"><span> Calls</span> <span className="menu-arrow"></span></Link>
                <ul style={style}>
                  <li><Link to="voice-call.html">Voice Call</Link></li>
                  <li><Link to="video-call.html">Video Call</Link></li>
                  <li><Link to="outgoing-call.html">Outgoing Call</Link></li>
                  <li><Link to="incoming-call.html">Incoming Call</Link></li>
                </ul>
              </li>
              <li><Link to="events.html">Calendar</Link></li>
              <li><Link to="contacts.html">Contacts</Link></li>
              <li><Link to="inbox.html">Email</Link></li>
              <li><Link to="file-manager.html">File Manager</Link></li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Employees</span>
          </li>
          <li className="submenu">
            <Link to="#" className="noti-dot"><i className="la la-user"></i> <span> Employees</span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="/all-employees">All Employees</Link></li>
              <li><Link to="/holidayTable">Holidays</Link></li>
              <li><Link to="/leaves-admin">Leaves (Admin) <span className="badge rounded-pill bg-primary float-end">1</span></Link></li>
              <li><Link to="/leaves-employee">Leaves (Employee)</Link></li>
              <li><Link to="/leave-setting">Leave Settings</Link></li>
              <li><Link to="/attendance-admin">Attendance (Admin)</Link></li>
              <li><Link to="/attendance-employee">Attendance (Employee)</Link></li>
              {/* <li><Link to="/department">Departments</Link></li> */}
              {/* <li><Link to="designations.html">Designations</Link></li>
              <li><Link to="timesheet.html">Timesheet</Link></li>
              <li><Link to="shift-scheduling.html">Shift & Schedule</Link></li> */}
              {/* <li><Link to="overtime.html">Overtime</Link></li> */}
            </ul>
          </li>
          {/* <li>
            <Link to="clients.html"><i className="la la-users"></i> <span>Clients</span></Link>
          </li> */}
          <li className="submenu">
          <Link to="#"><i className="la la-telegram"></i> <span> My Pay Slip</span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="/mypayslip">My Pay Slip</Link></li>
          </ul>
        </li>
          <li className="submenu">
            {/* <Link to="#"><i className="la la-rocket"></i> <span> Projects</span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="projects.html">Projects</Link></li>
              <li><Link to="tasks.html">Tasks</Link></li>
              <li><Link to="task-board.html">Task Board</Link></li>
            </ul> */}
          </li>
          <li>
            <Link to="leads.html"><i className="la la-user-secret"></i> <span>Leads</span></Link>
          </li>
          <li>
            <Link to="tickets.html"><i className="la la-ticket"></i> <span>Tickets</span></Link>
          </li>
          <li className="menu-title">
            <span>HR</span>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-files-o"></i> <span> Sales </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="estimates.html">Estimates</Link></li>
              <li><Link to="invoices.html">Invoices</Link></li>
              <li><Link to="payments.html">Payments</Link></li>
              <li><Link to="expenses.html">Expenses</Link></li>
              <li><Link to="provident-fund.html">Provident Fund</Link></li>
              <li><Link to="taxes.html">Taxes</Link></li>
            </ul>
          </li>
        </ul>
        <button className="viewmoremenu">More Menu</button>
        <ul className="hidden-links hidden">
          <li className="submenu">
            <Link to="#"><i className="la la-files-o"></i> <span> Accounting </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="categories.html">Categories</Link></li>
              <li><Link to="budgets.html">Budgets</Link></li>
              <li><Link to="budget-expenses.html">Budget Expenses</Link></li>
              <li><Link to="budget-revenues.html">Budget Revenues</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-money"></i> <span> Payroll </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="salary.html"> Employee Salary </Link></li>
              <li><Link to="salary-view.html"> Payslip </Link></li>
              <li><Link to="payroll-items.html"> Payroll Items </Link></li>
            </ul>
          </li>
          <li>
            <Link to="policies.html"><i className="la la-file-pdf-o"></i> <span>Policies</span></Link>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-pie-chart"></i> <span> Reports </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="expense-reports.html"> Expense Report </Link></li>
              <li><Link to="invoice-reports.html"> Invoice Report </Link></li>
              <li><Link to="payments-reports.html"> Payments Report </Link></li>
              <li><Link to="project-reports.html"> Project Report </Link></li>
              <li><Link to="task-reports.html"> Task Report </Link></li>
              <li><Link to="user-reports.html"> User Report </Link></li>
              <li><Link to="employee-reports.html"> Employee Report </Link></li>
              <li><Link to="payslip-reports.html"> Payslip Report </Link></li>
              <li><Link to="attendance-reports.html"> Attendance Report </Link></li>
              <li><Link to="leave-reports.html"> Leave Report </Link></li>
              <li><Link to="daily-reports.html"> Daily Report </Link></li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Performance</span>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-graduation-cap"></i> <span> Performance </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="performance-indicator.html"> Performance Indicator </Link></li>
              <li><Link to="performance.html"> Performance Review </Link></li>
              <li><Link to="performance-appraisal.html"> Performance Appraisal </Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-crosshairs"></i> <span> Goals </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="goal-tracking.html"> Goal List </Link></li>
              <li><Link to="goal-type.html"> Goal Type </Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-edit"></i> <span> Training </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="training.html"> Training List </Link></li>
              <li><Link to="trainers.html"> Trainers</Link></li>
              <li><Link to="training-type.html"> Training Type </Link></li>
            </ul>
          </li>
          <li><Link to="promotion.html"><i className="la la-bullhorn"></i> <span>Promotion</span></Link></li>
          <li><Link to="resignation.html"><i className="la la-external-link-square"></i> <span>Resignation</span></Link></li>
          <li><Link to="termination.html"><i className="la la-times-circle"></i> <span>Termination</span></Link></li>
          <li className="menu-title">
            <span>Administration</span>
          </li>
          <li>
            <Link to="assets.html"><i className="la la-object-ungroup"></i> <span>Assets</span></Link>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-briefcase"></i> <span> Jobs </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="user-dashboard.html"> User Dasboard </Link></li>
              <li><Link to="jobs-dashboard.html"> Jobs Dasboard </Link></li>
              <li><Link to="jobs.html"> Manage Jobs </Link></li>
              <li><Link to="manage-resumes.html"> Manage Resumes </Link></li>
              <li><Link to="shortlist-candidates.html"> Shortlist Candidates </Link></li>
              <li><Link to="interview-questions.html"> Interview Questions </Link></li>
              <li><Link to="offer_approvals.html"> Offer Approvals </Link></li>
              <li><Link to="experiance-level.html"> Experience Level </Link></li>
              <li><Link to="candidates.html"> Candidates List </Link></li>
              <li><Link to="schedule-timing.html"> Schedule timing </Link></li>
              <li><Link to="apptitude-result.html"> Aptitude Results </Link></li>
            </ul>
          </li>
          <li>
            <Link to="knowledgebase.html"><i className="la la-question"></i> <span>Knowledgebase</span></Link>
          </li>
          <li>
            <Link to="activities.html"><i className="la la-bell"></i> <span>Activities</span></Link>
          </li>
          <li>
            <Link to="users.html"><i className="la la-user-plus"></i> <span>Users</span></Link>
          </li>
          <li>
            <Link to="settings.html"><i className="la la-cog"></i> <span>Settings</span></Link>
          </li>
          <li className="menu-title">
            <span>Pages</span>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-user"></i> <span> Profile </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="profile.html"> Employee Profile </Link></li>
              <li><Link to="client-profile.html"> Client Profile </Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-key"></i> <span> Authentication </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="index.html"> Login </Link></li>
              <li><Link to="register.html"> Register </Link></li>
              <li><Link to="forgot-password.html"> Forgot Password </Link></li>
              <li><Link to="otp.html"> OTP </Link></li>
              <li><Link to="lock-screen.html"> Lock Screen </Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-exclamation-triangle"></i> <span> Error Pages </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="error-404.html">404 Error </Link></li>
              <li><Link to="error-500.html">500 Error </Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-hand-o-up"></i> <span> Subscriptions </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="subscriptions.html"> Subscriptions (Admin) </Link></li>
              <li><Link to="subscriptions-company.html"> Subscriptions (Company) </Link></li>
              <li><Link to="subscribed-companies.html"> Subscribed Companies</Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-columns"></i> <span> Pages </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="search.html"> Search </Link></li>
              <li><Link to="faq.html"> FAQ </Link></li>
              <li><Link to="terms.html"> Terms </Link></li>
              <li><Link to="privacy-policy.html"> Privacy Policy </Link></li>
              <li><Link to="blank-page.html"> Blank Page </Link></li>
            </ul>
          </li>
          <li className="menu-title">
            <span>UI Interface</span>
          </li>
          <li>
            <Link to="components.html"><i className="la la-puzzle-piece"></i> <span>Components</span></Link>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-object-group"></i> <span> Forms </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="form-basic-inputs.html">Basic Inputs </Link></li>
              <li><Link to="form-input-groups.html">Input Groups </Link></li>
              <li><Link to="form-horizontal.html">Horizontal Form </Link></li>
              <li><Link to="form-vertical.html"> Vertical Form </Link></li>
              <li><Link to="form-mask.html"> Form Mask </Link></li>
              <li><Link to="form-validation.html"> Form Validation </Link></li>
            </ul>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-table"></i> <span> Tables </span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li><Link to="tables-basic.html">Basic Tables </Link></li>
              <li><Link to="data-tables.html">Data Table </Link></li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Extras</span>
          </li>
          <li>
            <Link to="#"><i className="la la-file-text"></i> <span>Documentation</span></Link>
          </li>
          <li>
            <Link to="#"><i className="la la-info"></i> <span>Change Log</span> <span className="badge badge-primary ms-auto">v3.4</span></Link>
          </li>
          <li className="submenu">
            <Link to="#"><i className="la la-share-alt"></i> <span>Multi Level</span> <span className="menu-arrow"></span></Link>
            <ul style={style}>
              <li className="submenu">
                <Link to="#"> <span>Level 1</span> <span className="menu-arrow"></span></Link>
                <ul style={style}>
                  <li><Link to="#"><span>Level 2</span></Link></li>
                  <li className="submenu">
                    <Link to="#"> <span> Level 2</span> <span className="menu-arrow"></span></Link>
                    <ul style={style}>
                      <li><Link to="#">Level 3</Link></li>
                      <li><Link to="#">Level 3</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#"> <span>Level 2</span></Link></li>
                </ul>
              </li>
              <li>
                <Link to="#"> <span>Level 1</span></Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <ul className="sidebar-vertical">
        <li className="menu-title">
          <span>Main</span>
        </li>
        <li className="submenu">
          <Link to="#"><i className="la la-dashboard"></i> <span> Dashboard</span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="/dashboard"> Dashboard</Link></li>
            {/* <li><Link to="/basicdetails">Employee Dashboard</Link></li> */}
          </ul>
        </li>
        <li className="submenu">
          <Link to="#"><i className="la la-cube"></i> <span> Apps</span> <span className="menu-arrow"></span></Link>
          {/* <ul style={style}>
            <li><Link to="chat.html">Chat</Link></li>
            <li className="submenu">
              <Link to="#"><span> Calls</span> <span className="menu-arrow"></span></Link>
              <ul style={style}>
                <li><Link to="voice-call.html">Voice Call</Link></li>
                <li><Link to="video-call.html">Video Call</Link></li>
                <li><Link to="outgoing-call.html">Outgoing Call</Link></li>
                <li><Link to="incoming-call.html">Incoming Call</Link></li>
              </ul>
            </li>
            <li><Link to="events.html">Calendar</Link></li>
            <li><Link to="contacts.html">Contacts</Link></li>
            <li><Link to="inbox.html">Email</Link></li>
            <li><Link to="file-manager.html">File Manager</Link></li>
          </ul> */}
        </li>
        <li className="menu-title">
          <span>Employees</span>
        </li>
        <li className="submenu">
          <Link to="#" className="noti-dot"><i className="la la-user"></i> <span> Employees</span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="/all-employees">All Employees</Link></li>
            <li><Link to="/holidayTable">Holidays</Link></li>
            <li><Link to="/leaves-admin">Leaves (Admin) <span className="badge rounded-pill bg-primary float-end">1</span></Link></li>
            <li><Link to="/leaves-employee">Leaves (Employee)</Link></li>
            <li><Link to="/leave-setting">Leave Settings</Link></li>
            <li><Link to="/attendance-admin">Attendance (Admin)</Link></li>
            <li><Link to="/attendance-employee">Attendance (Employee)</Link></li>
            <li><Link to="/department">Departments</Link></li>
            {/* <li><Link to="designations.html">Designations</Link></li> */}
            {/* <li><Link to="timesheet.html">Timesheet</Link></li> */}
            {/* <li><Link to="shift-scheduling.html">Shift & Schedule</Link></li> */}
            {/* <li><Link to="overtime.html">Overtime</Link></li> */}
          </ul>
        </li>
        {/* <li> */}
          {/* <Link to="clients.html"><i className="la la-users"></i> <span>Clients</span></Link>
        </li> */}
        <li className="submenu">
          <Link to="#"><i className="la la-telegram"></i> <span> My Pay Slip</span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="/mypayslip">My Pay Slip</Link></li>
          </ul>
        </li>
        <li className="submenu">
          <Link to="#"><i className="la la-rocket"></i> <span> Projects</span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            {/* <li><Link to="projects.html">Projects</Link></li>
            <li><Link to="tasks.html">Tasks</Link></li>
            <li><Link to="task-board.html">Task Board</Link></li> */}
          </ul>
        </li>
        <li>
          {/* <Link to="leads.html"><i className="la la-user-secret"></i> <span>Leads</span></Link> */}
        </li>
        <li>
          {/* <Link to="tickets.html"><i className="la la-ticket"></i> <span>Tickets</span></Link> */}
        </li>
        <li className="menu-title">
          <span>HR</span>
        </li>
        {/* <li className="submenu">
          <Link to="#"><i className="la la-files-o"></i> <span> Sales </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="estimates.html">Estimates</Link></li>
            <li><Link to="invoices.html">Invoices</Link></li>
            <li><Link to="payments.html">Payments</Link></li>
            <li><Link to="expenses.html">Expenses</Link></li>
            <li><Link to="provident-fund.html">Provident Fund</Link></li>
            <li><Link to="taxes.html">Taxes</Link></li>
          </ul>
        </li> */}
        {/* <li className="submenu">
          <Link to="#"><i className="la la-files-o"></i> <span> Accounting </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="categories.html">Categories</Link></li>
            <li><Link to="budgets.html">Budgets</Link></li>
            <li><Link to="budget-expenses.html">Budget Expenses</Link></li>
            <li><Link to="budget-revenues.html">Budget Revenues</Link></li>
          </ul>
        </li> */}
        {/* <li className="submenu">
          <Link to="#"><i className="la la-money"></i> <span> Payroll </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="salary.html"> Employee Salary </Link></li>
            <li><Link to="salary-view.html"> Payslip </Link></li>
            <li><Link to="payroll-items.html"> Payroll Items </Link></li>
          </ul>
        </li> */}
        <li>
          <Link to="policies.html"><i className="la la-file-pdf-o"></i> <span>Policies</span></Link>
        </li>
        {/* <li className="submenu">
          <Link to="#"><i className="la la-pie-chart"></i> <span> Reports </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="expense-reports.html"> Expense Report </Link></li>
            <li><Link to="invoice-reports.html"> Invoice Report </Link></li>
            <li><Link to="payments-reports.html"> Payments Report </Link></li>
            <li><Link to="project-reports.html"> Project Report </Link></li>
            <li><Link to="task-reports.html"> Task Report </Link></li>
            <li><Link to="user-reports.html"> User Report </Link></li>
            <li><Link to="employee-reports.html"> Employee Report </Link></li>
            <li><Link to="payslip-reports.html"> Payslip Report </Link></li>
            <li><Link to="attendance-reports.html"> Attendance Report </Link></li>
            <li><Link to="leave-reports.html"> Leave Report </Link></li>
            <li><Link to="daily-reports.html"> Daily Report </Link></li>
          </ul>
        </li> */}
        <li className="menu-title">
          <span>Performance</span>
        </li>
        {/* <li className="submenu">
          <Link to="#"><i className="la la-graduation-cap"></i> <span> Performance </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="performance-indicator.html"> Performance Indicator </Link></li>
            <li><Link to="performance.html"> Performance Review </Link></li>
            <li><Link to="performance-appraisal.html"> Performance Appraisal </Link></li>
          </ul>
        </li>
        <li className="submenu">
          <Link to="#"><i className="la la-crosshairs"></i> <span> Goals </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="goal-tracking.html"> Goal List </Link></li>
            <li><Link to="goal-type.html"> Goal Type </Link></li>
          </ul>
        </li>
        <li className="submenu">
          <Link to="#"><i className="la la-edit"></i> <span> Training </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="training.html"> Training List </Link></li>
            <li><Link to="trainers.html"> Trainers</Link></li>
            <li><Link to="training-type.html"> Training Type </Link></li>
          </ul>
        </li>
        <li><Link to="promotion.html"><i className="la la-bullhorn"></i> <span>Promotion</span></Link></li>
        <li><Link to="resignation.html"><i className="la la-external-link-square"></i> <span>Resignation</span></Link></li>
        <li><Link to="termination.html"><i className="la la-times-circle"></i> <span>Termination</span></Link></li> */}
        {/* <li className="menu-title">
          <span>Administration</span>
        </li> */}
        <li>
          <Link to="assets.html"><i className="la la-object-ungroup"></i> <span>Assets</span></Link>
        </li>
        {/* <li className="submenu">
          <Link to="#"><i className="la la-briefcase"></i> <span> Jobs </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="user-dashboard.html"> User Dasboard </Link></li>
            <li><Link to="jobs-dashboard.html"> Jobs Dasboard </Link></li>
            <li><Link to="jobs.html"> Manage Jobs </Link></li>
            <li><Link to="manage-resumes.html"> Manage Resumes </Link></li>
            <li><Link to="shortlist-candidates.html"> Shortlist Candidates </Link></li>
            <li><Link to="interview-questions.html"> Interview Questions </Link></li>
            <li><Link to="offer_approvals.html"> Offer Approvals </Link></li>
            <li><Link to="experiance-level.html"> Experience Level </Link></li>
            <li><Link to="candidates.html"> Candidates List </Link></li>
            <li><Link to="schedule-timing.html"> Schedule timing </Link></li>
            <li><Link to="apptitude-result.html"> Aptitude Results </Link></li>
          </ul>
        </li> */}
        {/* <li> */}
          {/* <Link to="knowledgebase.html"><i className="la la-question"></i> <span>Knowledgebase</span></Link>
        </li>
        <li>
          <Link to="activities.html"><i className="la la-bell"></i> <span>Activities</span></Link>
        </li>
        <li>
          <Link to="users.html"><i className="la la-user-plus"></i> <span>Users</span></Link>
        </li>
        <li>
          <Link to="settings.html"><i className="la la-cog"></i> <span>Settings</span></Link>
        </li> */}
        <li className="menu-title">
          <span>Pages</span>
        </li>
        {/* <li className="submenu">
          <Link to="#"><i className="la la-user"></i> <span> Profile </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="profile.html"> Employee Profile </Link></li>
            <li><Link to="client-profile.html"> Client Profile </Link></li>
          </ul>
        </li> */}
        {/* <li className="submenu">
          <Link to="#"><i className="la la-key"></i> <span> Authentication </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="index.html"> Login </Link></li>
            <li><Link to="register.html"> Register </Link></li>
            <li><Link to="forgot-password.html"> Forgot Password </Link></li>
            <li><Link to="otp.html"> OTP </Link></li>
            <li><Link to="lock-screen.html"> Lock Screen </Link></li>
          </ul>
        </li> */}
        {/* <li className="submenu">
          <Link to="#"><i className="la la-exclamation-triangle"></i> <span> Error Pages </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="error-404.html">404 Error </Link></li>
            <li><Link to="error-500.html">500 Error </Link></li>
          </ul>
        </li> */}
        {/* <li className="submenu">
          <Link to="#"><i className="la la-hand-o-up"></i> <span> Subscriptions </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="subscriptions.html"> Subscriptions (Admin) </Link></li>
            <li><Link to="subscriptions-company.html"> Subscriptions (Company) </Link></li>
            <li><Link to="subscribed-companies.html"> Subscribed Companies</Link></li>
          </ul>
        </li> */}
        {/* <li className="submenu">
          <Link to="#"><i className="la la-columns"></i> <span> Pages </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="search.html"> Search </Link></li>
            <li><Link to="faq.html"> FAQ </Link></li>
            <li><Link to="terms.html"> Terms </Link></li>
            <li><Link to="privacy-policy.html"> Privacy Policy </Link></li>
            <li><Link to="blank-page.html"> Blank Page </Link></li>
          </ul>
        </li> */}
        <li className="menu-title">
          <span>UI Interface</span>
        </li>
        {/* <li>
          <Link to="components.html"><i className="la la-puzzle-piece"></i> <span>Components</span></Link>
        </li>
        <li className="submenu">
          <Link to="#"><i className="la la-object-group"></i> <span> Forms </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="form-basic-inputs.html">Basic Inputs </Link></li>
            <li><Link to="form-input-groups.html">Input Groups </Link></li>
            <li><Link to="form-horizontal.html">Horizontal Form </Link></li>
            <li><Link to="form-vertical.html"> Vertical Form </Link></li>
            <li><Link to="form-mask.html"> Form Mask </Link></li>
            <li><Link to="form-validation.html"> Form Validation </Link></li>
          </ul>
        </li>
        <li className="submenu">
          <Link to="#"><i className="la la-table"></i> <span> Tables </span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li><Link to="tables-basic.html">Basic Tables </Link></li>
            <li><Link to="data-tables.html">Data Table </Link></li>
          </ul>
        </li> */}
        <li className="menu-title">
          <span>Extras</span>
        </li>
        {/* <li>
          <Link to="#"><i className="la la-file-text"></i> <span>Documentation</span></Link>
        </li>
        <li>
          <Link to="#"><i className="la la-info"></i> <span>Change Log</span> <span className="badge badge-primary ms-auto">v3.4</span></Link>
        </li>
        <li className="submenu">
          <Link to="#"><i className="la la-share-alt"></i> <span>Multi Level</span> <span className="menu-arrow"></span></Link>
          <ul style={style}>
            <li className="submenu">
              <Link to="#"> <span>Level 1</span> <span className="menu-arrow"></span></Link>
              <ul style={style}>
                <li><Link to="#"><span>Level 2</span></Link></li>
                <li className="submenu">
                  <Link to="#"> <span> Level 2</span> <span className="menu-arrow"></span></Link>
                  <ul style={style}>
                    <li><Link to="#">Level 3</Link></li>
                    <li><Link to="#">Level 3</Link></li>
                  </ul>
                </li>
                <li><Link to="#"> <span>Level 2</span></Link></li>
              </ul>
            </li>
            <li>
              <Link to="#"> <span>Level 1</span></Link>
            </li>
          </ul>
        </li> */}
      </ul>

    </>

  )
}
