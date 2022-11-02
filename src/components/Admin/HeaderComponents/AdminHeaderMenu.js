import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminHeaderMenu() {
  return (
    <ul className="header-new-menu " id="headerNewMenu">
					<li >
						<Link to="/" data-bs-toggle="dropdown" id="dropmain" role="button" aria-haspopup="true" aria-expanded="false">Clients</Link>
						<ul className="dropdown-menu" >
							<li><Link className="dropdown-item" id="dropitem" to="clients.html">Clients</Link></li>
						</ul>
					</li>
					<li >
						<Link to="/" data-bs-toggle="dropdown" id="dropmain" role="button" aria-haspopup="true" aria-expanded="false">Projects</Link>
						<ul className="dropdown-menu">
							<li><Link className="dropdown-item" id="dropitem" to="projects.html">Projects</Link></li>
							<li><Link className="dropdown-item" id="dropitem" to="tasks.html">Tasks</Link></li>
							<li><Link className="dropdown-item" id="dropitem" to="task-board.html">Task Board</Link></li>
						</ul>
					</li>
					<li >
						<Link to="/" data-bs-toggle="dropdown" id="dropmain" role="button" aria-haspopup="true" aria-expanded="false">Leads</Link>
						<ul className="dropdown-menu">
						<li><Link className="dropdown-item" id="dropitem" to="leads.html">Leads</Link></li>
						</ul>
					</li>
					<li >
						<Link to="/" data-bs-toggle="dropdown" id="dropmain" role="button" aria-haspopup="true" aria-expanded="false">Tickets</Link>
						<ul className="dropdown-menu" >
						<li><Link className="dropdown-item" id="dropitem" to="tickets.html">Tickets</Link></li>
						</ul>
					</li>
				</ul>

                
                
  )
}
