import React from 'react'
import Heading from './common_component/Heading'
import Logo from './common_component/Logo'
import Textfields from './common_component/Textfields'

export default function EmployeeOnboarding() {
    return (
        <>
            <div className="account-page">
                <div className="main-wrapper">
                    <div className="account-content">
                        <div className="container">
                            {/* LOGO */}
                            <div className="account-box">
                                <div className="account-wrapper">
                                    <Logo dashboard="/basicdetails" />
                                    <Heading title="Employee Onboarding" />
                                    <form id="register_form">
                                        <Textfields label="Name" mandatory="*" type="text" name="name" id="name"/>
                                        <Textfields label="Email" mandatory="*" type="email" name="com_email" id="com_email" content="The email they will use to log into XPayroll. If this person does not have an email address.Click" links="here"/>

                                        <Textfields label="Hire Date" mandatory="*" type="date" name="hire_date" id="hire_date" content="The first day of employment for this person."/>
                                        <Textfields label="Department" mandatory="*" type="text" name="department" id="department" />
                                        <Textfields label="Annual Salary" mandatory="*" type="text" name="salary" id="salary" />
                                        
                                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
