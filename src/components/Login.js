import React from 'react'
import Logo from './common_component/Logo'
import SubmitButton from './common_component/Submit_button'
import { Link } from "react-router-dom";
import Textfields from './common_component/Textfields'
import Heading from './common_component/Heading'

export default function Login() {
    document.title = "Login - HRMS admin template";
   
    return (

        <div className="account-page">
            <div className="main-wrapper">
                <div className="account-content">
                    <div className="container">

                        {/* <!-- Account Logo --> */}
                        <Logo dashboard="/login" />
                        {/* <!-- /Account Logo --> */}

                        <div className="account-box">
                            <div className="account-wrapper">

                                <Heading title="Login" subtitle="Access to Our Dashboard" />

                                {/* <!-- Account Form --> */}
                                <form action="/basicdetails">
                                    <Textfields type="text" label="Email" id="login_email"/>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col">
                                                <label>Password</label>
                                            </div>
                                            <div className="col-auto">
                                                <Link className="text-muted" to="/forgotpassword">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="position-relative">
                                           
                                            <input className="form-control" type="password" id="password"/>
										<span className="fa fa-eye-slash" id="toggle-password"></span>
                                        </div>
                                    </div>
                                    <SubmitButton submitvalue="Login" btn_id="login"/>
                                    <div className="account-footer">
                                        <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                                    </div>
                                </form>
                                {/* <!-- /Account Form --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
