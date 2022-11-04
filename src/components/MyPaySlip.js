import React from 'react'
import SelectInputFields from './common_component/SelectInputFields';
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import TwoColSideBar from './Admin/TwoColSideBar'
import { Link } from 'react-router-dom';
import DashboardPageHeading from './Admin/PageContentComponents/DashboardPageHeading';
import { dropDownArray } from './utility/Dropdownutill';
import options from './utility/Options';



export default function MyPaySlip() {

    const optionArraypay = dropDownArray(options, "pay_slip");
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
                                    <DashboardPageHeading pageheading="My Pay Slip" pageworking="My Pay Slip" />
                                </div>
                            </div>
                            <form>
                                <SelectInputFields
                                    label="Select financial year" mandatory="*" type="text" select_id="pay_slip" name="payslip">
                                    {optionArraypay.map((e) => {
                                        return (
                                            <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                {e.optionvalue}
                                            </option>
                                        );
                                    })}
                                </SelectInputFields>
                            </form>

                            <p id="slip_p">Ops, looks like we have not processed a payroll for you.</p>
                            <Link className='btn-secondary' to="/dashboard" id="mpslip">Return to dashboard</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
