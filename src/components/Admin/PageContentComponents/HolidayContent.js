import React from 'react'

export default function HolidayContent() {
	return (
		<>
				<div className="row">
						<div className="col-md-12">
							<div className="table-responsive">
								<table className="table table-striped custom-table mb-0">
									<thead>
										<tr>
											<th>#</th>
											<th>Title </th>
											<th>Holiday Date</th>
											<th>Day</th>
											<th className="text-end">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr className="holiday-completed">
											<td>1</td>
											<td>New Year</td>
											<td>1 Jan 2019</td>
											<td>Sunday</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr className="holiday-completed">
											<td>2</td>
											<td>Good Friday</td>
											<td>14 Apr 2019</td>
											<td>Friday</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr className="holiday-completed">
											<td>3</td>
											<td>May Day</td>
											<td>1 May 2019</td>
											<td>Monday</td>
											{/* <td className="text-center">
											</td> */}
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr className="holiday-completed">
											<td>4</td>
											<td>Memorial Day</td>
											<td>28 May 2019</td>
											<td>Monday</td>
											{/* <td className="text-center">
											</td> */}
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr className="holiday-completed">
											<td>5</td>
											<td>Ramzon</td>
											<td>26 Jun 2019</td>
											<td>Monday</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr className="holiday-upcoming">
											<td>6</td>
											<td>Bakrid</td>
											<td>2 Sep 2019</td>
											<td>Saturday</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_holiday"><i className="fa fa-pencil m-r-5"></i> Edit</a>
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr className="holiday-upcoming">
											<td>7</td>
											<td>Deepavali</td>
											<td>18 Oct 2019</td>
											<td>Wednesday</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_holiday"><i className="fa fa-pencil m-r-5"></i> Edit</a>
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
													</div>
												</div>
											</td>
										</tr>
										<tr className="holiday-upcoming">
											<td>8</td>
											<td>Christmas</td>
											<td>25 Dec 2019</td>
											<td>Monday</td>
											<td className="text-end">
												<div className="dropdown dropdown-action">
													<a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="material-icons">more_vert</i></a>
													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#edit_holiday"><i className="fa fa-pencil m-r-5"></i> Edit</a>
														<a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_holiday"><i className="fa fa-trash-o m-r-5"></i> Delete</a>
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
