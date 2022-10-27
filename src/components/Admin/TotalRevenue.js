import React from 'react'

export default function TotalRevenue() {
  return (
    <>
  
    <div className="row">
    <div className="col-md-12">
        <div className="row">
            <div className="col-md-6 text-center">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Total Revenue</h3>
                        <div id="bar-charts"></div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 text-center">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Sales Overview</h3>
                        <div id="line-charts"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>
  )
}
