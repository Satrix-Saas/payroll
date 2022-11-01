import React from 'react'
import SelectInputFields from '../common_component/SelectInputFields';
import { dropDownArray } from '../utility/Dropdownutill';
import options from '../utility/Options';

export default function AddEditLeave(props) {
    const optionArray = dropDownArray(options, "Leaves-type");
    return (
        <>

            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.action}</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <SelectInputFields
                                label="Leave Type" mandatory="*" type="text" select_id="leave_type" name="leave_type">
                                {optionArray.map((e) => {
                                    return (
                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                            {e.optionvalue}
                                        </option>
                                    );
                                })}
                            </SelectInputFields>
                            <div className="form-group">
                                <label>From <span className="text-danger">*</span></label>
                                <div className="cal-icon">
                                    <input className="form-control datetimepicker" type="text"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>To <span className="text-danger">*</span></label>
                                <div className="cal-icon">
                                    <input className="form-control datetimepicker" type="text"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Number of days <span className="text-danger">*</span></label>
                                <input className="form-control" readOnly type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Remaining Leaves <span className="text-danger">*</span></label>
                                <input className="form-control" readOnly  type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Leave Reason <span className="text-danger">*</span></label>
                                <textarea rows="4" className="form-control"></textarea>
                            </div>
                            <div className="submit-section">
                                <button className="btn btn-primary submit-btn">{props.submit}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
} 
