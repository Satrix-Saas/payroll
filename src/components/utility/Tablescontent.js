import React from 'react'
import { Link } from 'react-router-dom'

export default function Tablescontent() {
  return (
    <>
      <div className="row">
						<div className="col-md-12">
							<div className="table-responsive">
								<table className="table table-striped custom-table mb-0 datatable">
									<thead>
										<tr>
											<th>Leave Type</th>
											<th>From</th>
											<th>To</th>
											<th>No of Days</th>
											<th>Reason</th>
											<th className="text-center">Status</th>
											<th>Approved by</th>
											<th className="text-end">Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Casual Leave</td>
											<td>8 Mar 2019</td>
											<td>9 Mar 2019</td>
											<td>2 days</td>
											<td>Going to Hospital</td>
											<td className="text-center">
												<div className="action-label">
													<Link className="btn btn-white btn-sm btn-rounded" to="3">
														<i className="fa fa-dot-circle-o text-purple"></i> New
													</Link>
												</div>
											</td>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar avatar-xs"><img src="assets/img/profiles/avatar-09.jpg" alt=""/></Link>
													<Link to="#">Richard Miles</Link>
												</h2>
											</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>Medical Leave</td>
											<td>27 Feb 2019</td>
											<td>27 Feb 2019</td>
											<td>1 day</td>
											<td>Going to Hospital</td>
											<td className="text-center">
												<div className="action-label">
													<Link className="btn btn-white btn-sm btn-rounded" to="#;">
														<i className="fa fa-dot-circle-o text-success"></i> Approved
													</Link>
												</div>
											</td>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar avatar-xs"><img src="assets/img/profiles/avatar-09.jpg" alt=""/></Link>
													<Link to="#">Richard Miles</Link>
												</h2>
											</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>LOP</td>
											<td>24 Feb 2019</td>
											<td>25 Feb 2019</td>
											<td>2 days</td>
											<td>Personnal</td>
											<td className="text-center">
												<div className="action-label">
													<Link className="btn btn-white btn-sm btn-rounded" to="#;">
														<i className="fa fa-dot-circle-o text-success"></i> Approved
													</Link>
												</div>
											</td>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar avatar-xs"><img src="assets/img/profiles/avatar-09.jpg" alt=""/></Link>
													<Link to="#">Richard Miles</Link>
												</h2>
											</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>Paternity Leave</td>
											<td>13 Feb 2019</td>
											<td>17 Feb 2019</td>
											<td>5 days</td>
											<td>Going to Hospital</td>
											<td className="text-center">
												<div className="action-label">
													<Link className="btn btn-white btn-sm btn-rounded" to="#;">
														<i className="fa fa-dot-circle-o text-danger"></i> Declined
													</Link>
												</div>
											</td>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar avatar-xs"><img src="assets/img/profiles/avatar-09.jpg" alt=""/></Link>
													<Link to="#">Richard Miles</Link>
												</h2>
											</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>Casual Leave</td>
											<td>30 Jan 2019</td>
											<td>30 Jan 2019</td>
											<td>Second Half</td>
											<td>Going to Hospital</td>
											<td className="text-center">
												<div className="action-label">
													<Link className="btn btn-white btn-sm btn-rounded" to="#;">
														<i className="fa fa-dot-circle-o text-purple"></i> New
													</Link>
												</div>
											</td>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar avatar-xs"><img src="assets/img/profiles/avatar-09.jpg" alt=""/></Link>
													<Link to="#">Richard Miles</Link>
												</h2>
											</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>Hospitalisation</td>
											<td>15 Jan 2019</td>
											<td>25 Jan 2019</td>
											<td>10 days</td>
											<td>Going to Hospital</td>
											<td className="text-center">
												<div className="action-label">
													<Link className="btn btn-white btn-sm btn-rounded" to="#;">
														<i className="fa fa-dot-circle-o text-success"></i> Approved
													</Link>
												</div>
											</td>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar avatar-xs"><img src="assets/img/profiles/avatar-09.jpg" alt=""/></Link>
													<Link to="#">Richard Miles</Link>
												</h2>
											</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>Casual Leave</td>
											<td>13 Jan 2019</td>
											<td>14 Jan 2019</td>
											<td>2 days</td>
											<td>Going to Hospital</td>
											<td className="text-center">
												<div className="action-label">
													<Link className="btn btn-white btn-sm btn-rounded" to="#;">
														<i className="fa fa-dot-circle-o text-success"></i> Approved
													</Link>
												</div>
											</td>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar avatar-xs"><img src="assets/img/profiles/avatar-09.jpg" alt=""/></Link>
													<Link to="#">Richard Miles</Link>
												</h2>
											</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>Casual Leave</td>
											<td>10 Jan 2019</td>
											<td>10 Jan 2019</td>
											<td>First Half</td>
											<td>Going to Hospital</td>
											<td className="text-center">
												<div className="action-label">
													<Link className="btn btn-white btn-sm btn-rounded" to="#;">
														<i className="fa fa-dot-circle-o text-danger"></i> Declined
													</Link>
												</div>
											</td>
											<td>
												<h2 className="table-avatar">
													<Link to="profile.html" className="avatar avatar-xs"><img src="assets/img/profiles/avatar-09.jpg" alt=""/></Link>
													<Link to="#">Richard Miles</Link>
												</h2>
											</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></Link>
													<div className="dropdown-menu dropdown-menu-right">
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#edit_leave"><i className="fa fa-pencil m-r-5"></i> Edit</Link>
														<Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_approve"><i className="fa fa-trash-o m-r-5"></i> Delete</Link>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
    </>
  )
}
