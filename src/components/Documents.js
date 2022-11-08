import React from 'react'
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading'
import TwoColSideBar from './Admin/TwoColSideBar'
import ExternalCredentials from './common_component/ExternalCredentials'
import LeaveSettingInput from './common_component/LeaveSettingInput'
import { dropDownArray } from './utility/Dropdownutill'
import options from './utility/Options'


export default function Documents() {
    const optionArrayCompany = dropDownArray(options, "Documents");
    return (
        <>
            <div className="main-wrapper">

                <AdminHeader />
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <Sidebar />
                        </div></div></div>
                <div className="two-col-bar" id="two-col-bar">
                    <TwoColSideBar />
                </div>
                <div className="page-wrapper">

                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <DashboardPageHeading pageheading="Documents" pageworking="Documents" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <div className="card leave-box" id="comp_logo">
                                    <div className="card-body">
                                        <div className="leave-item">
                                            <div className="leave-row">
                                                <div className="leave-left">
                                                    <div className="input-box">
                                                        <div className="form-group">
                                                            <label>Upload new documents</label>
                                                            <select className='form-control form-select'>
                                                                <option value="">--</option>
                                                                {optionArrayCompany.map((e) => {
                                                                    return (
                                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                            {e.optionvalue}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <ExternalCredentials label="Description?" />
                                            <LeaveSettingInput label="Images or documents (maximum 5 MB each)" type="file" editbtn="Edit" />
                                        </div>
                                        <div className="submit-section">
                                            <button className="btn btn-primary submit-btn">Submit</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
