import React from 'react'
import Heading from './common_component/Heading'
import Logo from './common_component/Logo'
import Textfields from './common_component/Textfields'

export default function ResetPassword() {
    return (
        <>
            <div className="account-page">
                <div className="main-wrapper">
                    <div className="account-content">
                        <div className="container">


                            <div className="account-box">
                                {/* <!-- Account Logo --> */}
                                <Logo dashboard="/login" />
                                {/* <!-- /Account Logo --> */}
                                <div className="account-wrapper">
                                    <Heading title="Reset Password" />
                                    <div className='text-center'><p>
                                        Password should have at least 8 characters.<br />
                                        Password should have at least 1 number.<br />
                                        Password should have at least 1 uppercase character.<br />
                                        Password should have at least 1 lowercase character.</p>
                                    </div>
                                    <form action="/resetpassword">
                                        <Textfields type="password" label="New Password" id="new_pass" name="new_pass" />
                                        <Textfields type="password" label="Confirm Password" id="con_pass" name="con_pass" />
                                        <div className="form-group text-center">
                                            <button type="button" className="btn btn-primary account-btn" id="continue" >Continue</button>
                                        </div>
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
 