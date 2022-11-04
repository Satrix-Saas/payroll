import React from 'react'
import EditCredPopupForm from '../common_component/EditCredPopupForm'
import ProfTaxEditCred from './ProfTaxEditCred'

export default function EditCredentials(props) {
    return (
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{props.heading}</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>

                        <EditCredPopupForm label="TRACES" content="Your company's TRACES login is required to file TDS returns, corrections, and to download Form 16/16A data." username="Username" typeofusername="text" typeofpassword="password" password="Password" />

                        <EditCredPopupForm label="PF" content="Your company's PF login is required to pay provident fund dues and file returns." username="Username" typeofusername="text" typeofpassword="password" password="Password" />

                        <EditCredPopupForm label="ESIC" content="Your company's ESIC login is required to pay ESIC dues and file returns." username="Username" typeofusername="text" typeofpassword="password" password="Password" />
                        <div>
                            <label>PT</label>
                            <div className="note">
                                <p>Your company's professional tax login (for your state's PT portal) is required to pay PT dues and file returns.</p>
                            </div>
                            <ProfTaxEditCred selectname="State" username="Username" typeofusername="text" typeofpassword="password" password="Password" />
                            <ProfTaxEditCred typeofusername="text" typeofpassword="password" />
                            <ProfTaxEditCred typeofusername="text" typeofpassword="password" />
                            <ProfTaxEditCred typeofusername="text" typeofpassword="password" />
                            <ProfTaxEditCred typeofusername="text" typeofpassword="password" />
                        </div>
                    </form>
                    <div className="submit-section">
                        <button className="btn btn-primary submit-btn" id="submit_editcred">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
