
import React from 'react'

export default function CardpunchStatus(props) {
	
	return (
		<div className="col-md-4">
		<div className="card punch-status">
			<div className="card-body">
				<h5 className="card-title">Timesheet <small className="text-muted" id="punching_date">{props.date}</small></h5>
				<div className="punch-det">
					<h6>Punch In at</h6>
					<p id="punch_date_time">{props.PunchinDateTime}</p>
				</div>
				<div className="punch-info">
					<div className="punch-hours">
						<span>{props.punchhrs}</span>
					</div>
				</div>
				<div className="punch-btn-section">
				
					<button type="button" className="btn btn-success bg-success punch-btn" id="punch_btn">Punch In</button>
					
				
					<button type="button" className="btn btn-success bg-warning punch-btn" id="punchout_btn">Punch Out</button>
				</div>
				<div className="statistics">
					<div className="row">
						<div className="col-md-6 col-6 text-center">
							<div className="stats-box">
								<p>Break</p>
								<h6>{props.breaktimehrs}</h6>
							</div>
						</div>
						<div className="col-md-6 col-6 text-center">
							<div className="stats-box">
								<p>Overtime</p>
								<h6>{props.overtimehrs}</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}
