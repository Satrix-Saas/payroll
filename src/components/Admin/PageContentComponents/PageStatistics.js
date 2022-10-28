import React from 'react'
import Progressbar from '../../common_component/Progressbar'

export default function PageStatistics(props) {
  return (
    <div className="col-md-12 col-lg-12 col-xl-4 d-flex">
      <div className="card flex-fill dash-statistics">
        <div className="card-body">
          <h5 className="card-title">{props.statsTitle}</h5>
          <div className="stats-list">
             <Progressbar heading="Today leave" barbgcolor="progress-bar bg-primary" obtained="4" overall="/ 65" style={{width:"31%"}} barvalue="31"/>
             <Progressbar heading="Today leave" barbgcolor="progress-bar bg-primary" obtained="4" overall="/ 65" style={{width:"31%"}} barvalue="31"/>
             <Progressbar heading="Today leave" barbgcolor="progress-bar bg-primary" obtained="4" overall="/ 65" style={{width:"31%"}} barvalue="31"/>
             <Progressbar heading="Today leave" barbgcolor="progress-bar bg-primary" obtained="4" overall="/ 65" style={{width:"31%"}} barvalue="31"/>
             <Progressbar heading="Today leave" barbgcolor="progress-bar bg-primary" obtained="4" overall="/ 65" style={{width:"31%"}} barvalue="31"/>                       
          </div>
        </div>
      </div>
    </div>
  )
}
