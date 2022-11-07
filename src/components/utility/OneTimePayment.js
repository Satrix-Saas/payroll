import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from '../Admin/AdminHeader'
import Sidebar from '../Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from '../Admin/PageContentComponents/DashboardPageHeading'
import TwoColSideBar from '../Admin/TwoColSideBar'
import SelectInputFields from '../common_component/SelectInputFields'
import Textfields from '../common_component/Textfields'
import { dropDownArray } from './Dropdownutill'
import options from './Options'




export default function OneTimePayment() {

    const optionArray2 = dropDownArray(options, "One_time_payment");
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
                                    <DashboardPageHeading pageheading="One-Time Payment" pageworking="One-Time Payment" />
                                </div>
                            </div>
                        </div>
                        <div id="rPr1"> <p>Please complete your organization's <Link to="https://payroll.razorpay.com/companyOnboarding?step=5&amp;redirect=%2FrunPayroll">KYC</Link>. Payroll execution is disabled</p></div>
                        <div id="rPr2"> <p>Pay your employees instantly outside their regular payroll
                            one-time payments feature. Please note that this is not a substitute for executing payroll,
                            cycle using our new
                            <Link to="https://intercom.help/XPayroll/en/articles/5279075-how-to-pay-and-recover-a-salary-advance">salary advance</Link>, or  <Link to="https://intercom.help/XPayroll/en/articles/5202750-how-to-reimbursements">reimbursements</Link>. A one-time payment helps in immediately paying a bonus,
                            incentive etc to your employees, which gets added to their next payroll's earnings. some employees, or set their salaries?
                        </p></div>
                        <form className='OnetmForm'>
                            <div className="OnetimeP">
                                <Textfields
                                    label="Who do you want to make the payment to?" className="required" type="text" mandatory="*" placeholder="Search For Employee" name="payment_to" id="pmnt2" />
                            </div>
                            <div className="OnetimeP">
                                <Textfields
                                    label="Total Amount" className="required" type="number" mandatory="*" name="total_amount." id="totalamnt" subid="ContentId" required="" content="Gross amount to be paid including tax"
                                />
                            </div>
                            <div className="OnetimeP">
                                <Textfields
                                    label="Who do you want to make the payment to?" className="required" type="text" mandatory="*" name="payment_to" id="pmnt2" />
                            </div>
                            <div className="OnetimeP" id="tpop">
                                <Textfields
                                    label="Type of Payment" className="required" type="text" mandatory="*" name="paymenttype." id="paytype" subid="ContentId" content="This will be reflected in the employee’s payslip. Example: performance bonus."
                                />
                            </div>
                            <label className='checkboxvalue'>
                                <input id="oneTimeCbox" type="checkbox" checked="defaultchecked" data-gtm-form-interact-field-id="0" />  This payment is taxable
                            </label>
                            <div className='onetpDrop'>
                                <SelectInputFields
                                    label="Please choose how to recover TDS for this payment" mandatory="*" type="text" select_id="onetimepayment" name="onetimepayment">
                                    {optionArray2.map((e) => {
                                        return (
                                            <option key={e.name} name={e.name} option={e.option} value={e.optionvalue}>
                                                {e.optionvalue}
                                            </option>
                                        );
                                    })}
                                </SelectInputFields>
                            </div>

                        </form>
                        <h4 className='note'> No payments added yet!  </h4>

                    </div>
                </div>
            </div>
        </div>

    )
}
