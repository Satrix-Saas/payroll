import React from 'react'

export default function AddHoliday(props) {
  return (
   
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
                    <div className="form-group">
                        <label>Holiday Name <span className="text-danger">*</span></label>
                        <input className="form-control" id="name_holiday" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Holiday Date <span className="text-danger">*</span></label>
                        <div className="cal-icon"><input className="form-control datetimepicker" id="holiday_date" type="text"/></div>
                    </div>
                    <div className="submit-section">
                        <button className="btn btn-primary submit-btn" id={props.id}>{props.submit}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}
