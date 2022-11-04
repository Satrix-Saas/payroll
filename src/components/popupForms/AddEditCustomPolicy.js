import React from 'react'

export default function AddEditCustomPolicy(props) {
    return (
        <>

            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.heading}</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Policy Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Days <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group leave-duallist">
                                <label>Add employee</label>
                                <div className="row">
                                    <div className="col-lg-5 col-sm-5">
                                        <select name="customleave_from" id="customleave_select" className="form-control form-select" size="5" multiple="multiple">
                                            <option value="1">Bernardo Galaviz </option>
                                            <option value="2">Jeffrey Warden</option>
                                            <option value="2">John Doe</option>
                                            <option value="2">John Smith</option>
                                            <option value="3">Mike Litorus</option>
                                        </select>
                                    </div>
                                    <div className="multiselect-controls col-lg-2 col-sm-2 d-grid gap-2">
                                        <button type="button" id="customleave_select_rightAll" className="btn w-100 btn-white"><i className="fa fa-forward"></i></button>
                                        <button type="button" id="customleave_select_rightSelected" className="btn w-100 btn-white"><i className="fa fa-chevron-right"></i></button>
                                        <button type="button" id="customleave_select_leftSelected" className="btn w-100 btn-white"><i className="fa fa-chevron-left"></i></button>
                                        <button type="button" id="customleave_select_leftAll" className="btn w-100 btn-white"><i className="fa fa-backward"></i></button>
                                    </div>
                                    <div className="col-lg-5 col-sm-5">
                                        <select name="customleave_to" id="customleave_select_to" className="form-control form-select" size="8" multiple="multiple"></select>
                                    </div>
                                </div>
                            </div>

                            <div className="submit-section">
                                <button className="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    ) 
} 
