import React from 'react'
import { Link } from 'react-router-dom'



export default function TwoColSideBar() {

	return (
		<>

			<div className="sidebar sidebar-twocol" id="navbar-nav">
				<div className="sidebar-left slimscroll">
					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<Link className="nav-link active" id="v-pills-dashboard-tab" title="Dashboard" data-bs-toggle="pill" href="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
							<span className="material-icons-outlined">
								home
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-apps-tab" title="Apps" data-bs-toggle="pill" href="#v-pills-apps" role="tab" aria-controls="v-pills-apps" aria-selected="false">
							<span className="material-icons-outlined">
								dashboard
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-employees-tab" title="Employees" data-bs-toggle="pill" href="#v-pills-employees" role="tab" aria-controls="v-pills-employees" aria-selected="false">
							<span className="material-icons-outlined">
								people
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-clients-tab" title="Clients" data-bs-toggle="pill" href="#v-pills-clients" role="tab" aria-controls="v-pills-clients" aria-selected="false">
							<span className="material-icons-outlined">
								person
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-projects-tab" title="Projects" data-bs-toggle="pill" href="#v-pills-projects" role="tab" aria-controls="v-pills-projects" aria-selected="false">
							<span className="material-icons-outlined">
								topic
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-leads-tab" title="Leads" data-bs-toggle="pill" href="#v-pills-leads" role="tab" aria-controls="v-pills-leads" aria-selected="false">
							<span className="material-icons-outlined">
								leaderboard
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-tickets-tab" title="Tickets" data-bs-toggle="pill" href="#v-pills-tickets" role="tab" aria-controls="v-pills-tickets" aria-selected="false">
							<span className="material-icons-outlined">
								confirmation_number
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-sales-tab" title="Sales" data-bs-toggle="pill" href="#v-pills-sales" role="tab" aria-controls="v-pills-sales" aria-selected="false">
							<span className="material-icons-outlined">
								shopping_bag
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-accounting-tab" title="Accounting" data-bs-toggle="pill" href="#v-pills-accounting" role="tab" aria-controls="v-pills-accounting" aria-selected="false">
							<span className="material-icons-outlined">
								account_balance_wallet
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-payroll-tab" title="Payroll" data-bs-toggle="pill" href="#v-pills-payroll" role="tab" aria-controls="v-pills-payroll" aria-selected="false">
							<span className="material-icons-outlined">
								request_quote
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-policies-tab" title="Policies" data-bs-toggle="pill" href="#v-pills-policies" role="tab" aria-controls="v-pills-policies" aria-selected="false">
							<span className="material-icons-outlined">
								verified_user
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-reports-tab" title="Reports" data-bs-toggle="pill" href="#v-pills-reports" role="tab" aria-controls="v-pills-reports" aria-selected="false">
							<span className="material-icons-outlined">
								report_gmailerrorred
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-performance-tab" title="Performance" data-bs-toggle="pill" href="#v-pills-performance" role="tab" aria-controls="v-pills-performance" aria-selected="false">
							<span className="material-icons-outlined">
								shutter_speed
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-goals-tab" title="Goals" data-bs-toggle="pill" href="#v-pills-goals" role="tab" aria-controls="v-pills-goals" aria-selected="false">
							<span className="material-icons-outlined">
								track_changes
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-training-tab" title="Training" data-bs-toggle="pill" href="#v-pills-training" role="tab" aria-controls="v-pills-training" aria-selected="false">
							<span className="material-icons-outlined">
								checklist_rtl
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-promotion-tab" title="Promotions" data-bs-toggle="pill" href="#v-pills-promotion" role="tab" aria-controls="v-pills-promotion" aria-selected="false">
							<span className="material-icons-outlined">
								auto_graph
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-resignation-tab" title="Resignation" data-bs-toggle="pill" href="#v-pills-resignation" role="tab" aria-controls="v-pills-resignation" aria-selected="false">
							<span className="material-icons-outlined">
								do_not_disturb_alt
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-termination-tab" title="Termination" data-bs-toggle="pill" href="#v-pills-termination" role="tab" aria-controls="v-pills-termination" aria-selected="false">
							<span className="material-icons-outlined">
								indeterminate_check_box
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-assets-tab" title="Assets" data-bs-toggle="pill" href="#v-pills-assets" role="tab" aria-controls="v-pills-assets" aria-selected="false">
							<span className="material-icons-outlined">
								web_asset
							</span>
						</Link>
						<Link className="nav-link " id="v-pills-jobs-tab" title="Jobs" data-bs-toggle="pill" href="#v-pills-jobs" role="tab" aria-controls="v-pills-jobs" aria-selected="false">
							<span className="material-icons-outlined">
								work_outline
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-knowledgebase-tab" title="Knowledgebase" data-bs-toggle="pill" href="#v-pills-knowledgebase" role="tab" aria-controls="v-pills-knowledgebase" aria-selected="false">
							<span className="material-icons-outlined">
								school
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-activities-tab" title="Activities" data-bs-toggle="pill" href="#v-pills-activities" role="tab" aria-controls="v-pills-activities" aria-selected="false">
							<span className="material-icons-outlined">
								toggle_off
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-users-tab" title="Users" data-bs-toggle="pill" href="#v-pills-users" role="tab" aria-controls="v-pills-users" aria-selected="false">
							<span className="material-icons-outlined">
								group_add
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-settings-tab" title="Settings" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
							<span className="material-icons-outlined">
								settings
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-profile-tab" title="Profile" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
							<span className="material-icons-outlined">
								manage_accounts
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-authentication-tab" title="Authentication" data-bs-toggle="pill" href="#v-pills-authentication" role="tab" aria-controls="v-pills-authentication" aria-selected="false">
							<span className="material-icons-outlined">
								perm_contact_calendar
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-errorpages-tab" title="Error Pages" data-bs-toggle="pill" href="#v-pills-errorpages" role="tab" aria-controls="v-pills-errorpages" aria-selected="false">
							<span className="material-icons-outlined">
								announcement
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-subscriptions-tab" title="Subscriptions" data-bs-toggle="pill" href="#v-pills-subscriptions" role="tab" aria-controls="v-pills-subscriptions" aria-selected="false">
							<span className="material-icons-outlined">
								loyalty
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-pages-tab" title="Pages" data-bs-toggle="pill" href="#v-pills-pages" role="tab" aria-controls="v-pills-pages" aria-selected="false">
							<span className="material-icons-outlined">
								layers
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-forms-tab" title="Forms" data-bs-toggle="pill" href="#v-pills-forms" role="tab" aria-controls="v-pills-forms" aria-selected="false">
							<span className="material-icons-outlined">
								view_day
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-tables-tab" title="Tables" data-bs-toggle="pill" href="#v-pills-tables" role="tab" aria-controls="v-pills-tables" aria-selected="false">
							<span className="material-icons-outlined">
								table_rows
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-documentation-tab" title="Documentation" data-bs-toggle="pill" href="#v-pills-documentation" role="tab" aria-controls="v-pills-documentation" aria-selected="false">
							<span className="material-icons-outlined">
								description
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-changelog-tab" title="Changelog" data-bs-toggle="pill" href="#v-pills-changelog" role="tab" aria-controls="v-pills-changelog" aria-selected="false">
							<span className="material-icons-outlined">
								sync_alt
							</span>
						</Link>
						<Link className="nav-link" id="v-pills-multilevel-tab" title="Multilevel" data-bs-toggle="pill" href="#v-pills-multilevel" role="tab" aria-controls="v-pills-multilevel" aria-selected="false">
							<span className="material-icons-outlined">
								library_add_check
							</span>
						</Link>
					</div>
				</div>

			</div>

		</>
	)
}
