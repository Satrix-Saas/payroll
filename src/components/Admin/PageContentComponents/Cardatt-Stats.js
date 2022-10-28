import React from 'react'
import Progressbar from '../../common_component/Progressbar'

export default function CardattStats() {
  return (
    <div className="col-md-4">
    <div className="card att-statistics">
        <div className="card-body">
            <h5 className="card-title">Statistics</h5>
            <div className="stats-list">
                <Progressbar heading="Today" obtained="3.45" overall=" / 8 hrs" barbgcolor="progress-bar bg-primary" style={{width:"31%"}} barvalue="31"/>
                <Progressbar  heading="This Week" obtained="28" overall="/ 40 hrs" barbgcolor="progress-bar bg-warning" style={{width:"31%"}} barvalue="31"/>
                <Progressbar  heading="This Month" obtained="90" overall=" / 160 hrs" barbgcolor="progress-bar bg-success" style={{width:"62%"}} barvalue="62"/>
                <Progressbar  heading="Remaining" obtained="90" overall=" / 160 hrs" barbgcolor="progress-bar bg-danger" style={{width:"62%"}}  barvalue="62"/>
                <Progressbar  heading="Overtime" obtained="4" barbgcolor="progress-bar bg-info" style={{width:"22%"}}  barvalue="22"/>
          
            </div>
        </div>
    </div>
</div>
  )
}
