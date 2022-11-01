import React from 'react'
import { Link } from 'react-router-dom'
import Heading from './common_component/Heading'
import Logo from './common_component/Logo'
import Textfields from './common_component/Textfields'

export default function ForgotPassword() {
    document.title = "Forgot Password";
    return (
        <div className="account-page">

            {/* <!-- Main Wrapper --> */}
            <div className="main-wrapper">

                <div className="account-content">
                    <div className="container">

                      
                        <div className="account-box">
                              {/* <!-- Account Logo --> */}
                        <Logo />
                        {/* <!-- /Account Logo --> */}

                            <div className="account-wrapper">

                                <Heading title="Forgot Password?" subtitle="Enter your email to get a password reset link" />

                                <form>
                                    <Textfields type="text" label="Email Address" id="forgotpswd_email" name="email_address"/>

                                    <div className="form-group text-center">
                                        <button type="button" className="btn btn-primary account-btn" id="reset" >Reset Password</button>
                                    </div>

                                    <div className="account-footer">
                                        <p>Remember your password? <Link to="/login">Login</Link></p>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
