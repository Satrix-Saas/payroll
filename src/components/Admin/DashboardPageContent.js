import React from 'react'
import PageCard from './PageContentComponents/PageCard'
import PageChartCard from './PageContentComponents/PageChartCard'
import PageHeader from './PageContentComponents/PageHeader'
import PageReport from './PageContentComponents/PageReport'
import PageStatistics from './PageContentComponents/PageStatistics'

export default function DashbaordPageContent() {
    return (
        <div className="content container-fluid">
            <PageHeader pagetitle="Welcome Admin!" pageactive="Dashboard" />
            <div className="row">
                <PageCard icons="fa fa-cubes" cardtitle="Projects" numbers="112" />
                <PageCard icons="fa fa-usd" cardtitle="Clients" numbers="32" />
                <PageCard icons="fa fa-diamond" cardtitle="Tasks" numbers="37" />
                <PageCard icons="fa fa-user" cardtitle="Employees" numbers="218" />
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <PageChartCard charttitle="Total Revenues" chartid="bar-charts" />
                        <PageChartCard charttitle="Sales Overview" chartid="line-charts" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card-group m-b-30">
                        <PageReport reporttitle="New Employees" textcolor="text-success" currentValue="10" percent="+10%" previous="Overall Employees 218" />
                        <PageReport reporttitle="Earnings" textcolor="text-success" currentValue="$1,42,300" percent="+12.5%" previous="Previous Month" prevValue="$1,15,852" />
                        <PageReport reporttitle="Expenses" textcolor="text-danger" currentValue="$8,500" percent="-2.8%" previous="Previous Month " prevValue="$7,500"/>
                        <PageReport reporttitle="Profit" textcolor="text-danger" currentValue="$1,12,000" percent="-75%" previous="Previous Month" prevValue="$1,42,000"/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <PageStatistics statsTitle="Statistics"/>

                      
            </div>
        </div>

    )
}
