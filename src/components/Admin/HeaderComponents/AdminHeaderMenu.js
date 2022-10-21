import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminHeaderMenu() {
  return (
    <ul className="header-new-menu">
					<li>
						<Link to="/" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Clients</Link>
						<div className="dropdown-menu">
							<Link className="dropdown-item" to="clients.html">Clients</Link>
						</div>
					</li>
					<li>
						<Link to="/" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects</Link>
						<div className="dropdown-menu">
							<Link className="dropdown-item" to="projects.html">Projects</Link>
							<Link className="dropdown-item" to="tasks.html">Tasks</Link>
							<Link className="dropdown-item" to="task-board.html">Task Board</Link>
						</div>
					</li>
					<li>
						<Link to="/" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Leads</Link>
						<div className="dropdown-menu">
							<Link className="dropdown-item" to="leads.html">Leads</Link>
						</div>
					</li>
					<li>
						<Link to="/" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tickets</Link>
						<div className="dropdown-menu">
							<Link className="dropdown-item" to="tickets.html">Tickets</Link>
						</div>
					</li>
				</ul>

                
                
  )
}
