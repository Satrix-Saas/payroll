import React from 'react'
import StatsInfo from './Statsutitlity/StatsInfo'

export default function PageStatistics(props) {
  return (
    <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
      <div className="card flex-fill dash-statistics">
        <div className="card-body">
          <h5 className="card-title">{props.statsTitle}</h5>
          <div className="stats-list">
             <StatsInfo bgcolor="progress-bar bg-primary"/>
             <StatsInfo bgcolor="progress-bar bg-primary"/>
             <StatsInfo bgcolor="progress-bar bg-primary"/>
             <StatsInfo bgcolor="progress-bar bg-primary"/>
             <StatsInfo bgcolor="progress-bar bg-primary"/>                       
          </div>
        </div>
      </div>
    </div>
  )
}
