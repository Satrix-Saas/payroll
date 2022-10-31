import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import TwoColSideBar from './Admin/TwoColSideBar'
import DepartmentCom from './Admin/PageContentComponents/DepartmentCom'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'

export default function Departments() {
	return (

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
								<DashboardPageHeading pageheading="Department" pageworking="Department" />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div>
								<table className="table table-striped custom-table mb-0 datatable">
									<thead>
										<tr>
											<th style={{ width: "30px" }}>#</th>
											<th>Department Name</th>
											<th className="text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<DepartmentCom title="Web development" serialnum="1" />
										<DepartmentCom title="Andriod development" serialnum="2" />
										<DepartmentCom title="IT Management" serialnum="3" />
										<DepartmentCom title="Accounts Management" serialnum="4" />
										<DepartmentCom title="Support Management" serialnum="5" />
										<DepartmentCom title="Marketing" serialnum="6" />

									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	)
}
