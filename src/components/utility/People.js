import React from 'react'
import AdminHeader from '../Admin/AdminHeader'
import Sidebar from '../Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from '../Admin/PageContentComponents/DashboardPageHeading'
import TwoColSideBar from '../Admin/TwoColSideBar'
import Textfields from '../common_component/Textfields'
import InputTabs from './InputTabs'







export default function People() {
    return (
        <div>
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
                                    <DashboardPageHeading pageheading="People" pageworking="People" />
                                </div>
                            </div>
                        </div>

                        <div className='peoplmain container'>
                            <h3 id="ph3">Add employees and contractors</h3>
                            <div className='peopleHead'>
                                <span className='psubHeading--NumberIndicator' id="psubh1"> Setup compliance </span>
                                <span id="psubh2">Add employees and contractors</span>
                            </div>

                        </div>
                        <div className="nav-item" id="searchbar">
                            <div className="top-nav-search">

                                <div class="ISbtn input-group mb-3 container text-center">
                                    <input type="text" id="peopleIbtn" class="form-control" placeholder="Search by name, email or employee id" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">

                                        <button id="psearchbtn" class="btn btn-outline-secondary" type="button">Button</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div id="tabbtns">
                                    <InputTabs tabtype="submit" tabvalue="All (1)" />
                                    <InputTabs tabtype="submit" tabvalue="employees (1)" />
                                    <InputTabs tabtype="submit" tabvalue="contractors (0)" />
                                    <InputTabs tabtype="submit" tabvalue="dismiss (0)" />
                                </div>
                            </div>
                        </div>

                        {/* <Textfields type="text" placeholder="Placeholder" required="*" id="peoplLetxt"
                        label="Name of people with missing information shown in gray" mandatory="*"  select_id="onetimepayment" name="onetimepayment"/>
                           
 */}                     <div className='container' id="peopleLast">
                        <table class="table__style--fullWidth table__style--people table__style--hover"><tbody><tr><td data-title="name" class="missing--details"><a href="https://payroll.razorpay.com/employeeDetail?userId=351869">ved prakash</a></td><td data-title="title"></td></tr>
                        </tbody></table>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
