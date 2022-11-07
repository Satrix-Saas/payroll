import React from 'react'
import Radiofield from './common_component/Radiofields'
import SelectInputFields from './common_component/SelectInputFields'
import Textfields from './common_component/Textfields'
import { dropDownArray } from './utility/Dropdownutill'
import options from './utility/Options'

export default function EmployeeOnboarding(props) {

    const optionArraymanager = dropDownArray(options, "Manager");
    const optionArraylocation = dropDownArray(options, "State");

    return (
        <>
            {/* <div className="main-wrapper">

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
                        <AdminHeading admin=" Employee!" dashboard="Employee OnBoarding" />
                        <div className="account-page">
                            <div className="main-wrapper">
                                <div className="account-content">
                                    <div className="container">
                                  
                                        <div className="account-box">
                                            <Logo dashboard="/basicdetails" />
                                            <div className="account-wrapper">
                                                <Heading title="Employee Onboarding" /> */}
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.action}</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="employee_onboarding">
                            <p>Is this an employee or a contractor?</p>

                            <Radiofield id="employee" name="emp_cont" value="Employee" />
                            <Radiofield id="contractor" name="emp_cont" value="Contractor" />

                            <Textfields label="Name" mandatory="*" type="text" name="name" id="name" />

                            <Textfields label="Email" mandatory="*" type="email" name="com_email" id="com_email" content="The email they will use to log into XPayroll. If this person does not have an email address.Click" links="here" />

                            <Textfields label="Hire Date" mandatory="*" type="date" name="hire_date" id="hire_date" content="The first day of employment for this person." />

                            <Textfields label="Job Title" type="text" name="title" id="title" />

                            <Textfields label="Department" type="text" name="department" id="department" />
                            <SelectInputFields
                                label="Manager" type="text" select_id="manager" name="manager">
                                {optionArraymanager.map((e) => {
                                    return (
                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                            {e.optionvalue}
                                        </option>
                                    );
                                })}
                            </SelectInputFields>

                            <Textfields label="Annual Salary" type="text" name="salary" id="salary" content="Annual salary is the current CTC (cost to company) for this employee, not including variable pay. If you have a monthly CTC, please multiply by 12. XPayroll will automatically create an ideal salary structure." />

                            <SelectInputFields
                                label="Location" type="text" select_id="location" name="location">
                                {optionArraylocation.map((e) => {
                                    return (
                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                            {e.optionvalue}
                                        </option>
                                    );
                                })}
                            </SelectInputFields>

                            <div className="submit-section">
                                <button className="btn btn-primary submit-btn" id="add_emp">Submit</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >

        </>
    )
}
