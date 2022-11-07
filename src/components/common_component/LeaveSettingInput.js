import React from 'react'

export default function LeaveSettingInput(props) {
    return (
        <>
            <div className="leave-row">
                <div className="leave-left">
                    <div className="input-box">
                        <div className="form-group">
                            <label>{props.label}</label>
                            <input type={props.type} className="form-control" placeholder={props.placeholder} disabled={props.disabled}/>
                        </div>
                    </div>
                </div>
                <div className="leave-right">
                    <button className="leave-edit-btn">{props.editbtn}</button>
                </div>
            </div>
        </>
    )
} 
