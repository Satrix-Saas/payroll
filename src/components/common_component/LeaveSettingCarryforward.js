import React from 'react'

export default function Carryforward() {
    return (
        <>
            <div className="leave-row">
                <div className="leave-left">
                    <div className="input-box">
                        <label className="d-block">Carry forward</label>
                        <div className="leave-inline-form">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="carry_no" value="option1" disabled/>
                                    <label className="form-check-label" htmlFor="carry_no">No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="carry_yes" value="option2" disabled/>
                                    <label className="form-check-label" htmlFor="carry_yes">Yes</label>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">Max</span>
                                <input type="text" className="form-control" disabled/>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="leave-right">
                    <button className="leave-edit-btn">
                        Edit
                    </button>
                </div>
            </div>
        </>
    )
}
