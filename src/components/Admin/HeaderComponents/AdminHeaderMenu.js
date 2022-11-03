import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminHeaderMenu() {
  return (
    <ul className="header-new-menu " id="headerNewMenu">
					<li className='headerli'>
						<Link to="/" data-bs-toggle="dropdown" id="dropmain" role="button" aria-haspopup="true" aria-expanded="false">Clients</Link>
						<div className="dropdown-menu" >
							<Link className="dropdown-item" id="dropitem" to="clients.html">Clients</Link>
						</div>
					</li>
					<li className='headerli'>
						<Link to="/" data-bs-toggle="dropdown" id="dropmain" role="button" aria-haspopup="true" aria-expanded="false">Projects</Link>
						<div className="dropdown-menu">
							<Link className="dropdown-item" id="dropitem" to="projects.html">Projects</Link>
							<Link className="dropdown-item" id="dropitem" to="tasks.html">Tasks</Link>
							<Link className="dropdown-item" id="dropitem" to="task-board.html">Task Board</Link>
						</div>
					</li>
					<li className='headerli'>
						<Link to="/" data-bs-toggle="dropdown" id="dropmain" role="button" aria-haspopup="true" aria-expanded="false">Leads</Link>
						<div className="dropdown-menu">
							<Link className="dropdown-item" id="dropitem" to="leads.html">Leads</Link>
						</div>
					</li>
					<li className='headerli'>
						<Link to="/" data-bs-toggle="dropdown" id="dropmain" role="button" aria-haspopup="true" aria-expanded="false">Tickets</Link>
						<div className="dropdown-menu" >
							<Link className="dropdown-item" id="dropitem" to="tickets.html">Tickets</Link>
						</div>
					</li>
				</ul>

                
                
  )
}
