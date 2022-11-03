import React from 'react'

export default function EditCredPopupForm(props) {
    return (
        <>
            <label>{props.label}</label>

            <div className="note">
                <p>{props.content}</p>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">{props.username}</label>
                        <input className="form-control" type={props.typeofusername} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">{props.password}</label>
                        <input className="form-control" type={props.typeofpassword} />
                    </div>
                </div>
            </div>
        </>
    )
}
