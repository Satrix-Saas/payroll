import React from 'react'

export default function ExternalCredentials(props) {
    return (
        <>
            <div className='leave-item'>
                <div className="leave-row">
                    <div className="leave-left">
                        <div className="input-box">
                            <div className="form-group">
                                <label>{props.label}</label>
                                <input type="text" className="form-control" placeholder={props.placeholder} disabled={props.disabled} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
