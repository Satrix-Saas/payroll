import React from 'react'

export default function EarnedLeaves(props) {
    return (
        <>
            <div className="leave-row">
                <div className="leave-left">
                    <div className="input-box">
                        <label className="d-block">{props.heading}</label>
                        <div className="leave-inline-form">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="earned_no" value="option1" disabled/>
                                    <label className="form-check-label" htmlFor="earned_no">{props.Option1}</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="earned_yes" value="option2" disabled/>
                                    <label className="form-check-label" htmlFor="earned_yes">{props.Option2}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leave-right">
                    <button className="leave-edit-btn">
                        {props.edit}
                    </button>
                </div>
            </div>
        </>
    )
}
