import React from 'react'
import { dropDownArray } from '../../utility/Dropdownutill';
import options from '../../utility/Options';
import { Link } from 'react-router-dom';
export default function SearchFilterAdminLeave() {
    const optionArrayType = dropDownArray(options, "Leaves-type");
    const optionArrayStatus = dropDownArray(options, "Leaves-status");
    return (
        <div className="row filter-row">
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                    <input type="text" className="form-control floating" />
                    <label className="focus-label">Employee Name</label>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus select-focus">
                    <select className="select floating">
                        <option> --  </option>
                        {optionArrayType.map((e) => {
                            return (
                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                    {e.optionvalue}
                                </option>
                            );
                        })}
                    </select>
                    <label className="focus-label">Leave Type</label>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus select-focus">
                    <select className="select floating">
                        <option> --  </option>
                        {optionArrayStatus.map((e) => {
                            return (
                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                    {e.optionvalue}
                                </option>
                            );
                        })}
                    </select>
                    <label className="focus-label">Leave Status</label>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                    <div className="cal-icon">
                        <input className="form-control floating datetimepicker" type="text" />
                    </div>
                    <label className="focus-label">From</label>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <div className="form-group form-focus">
                    <div className="cal-icon">
                        <input className="form-control floating datetimepicker" type="text" />
                    </div>
                    <label className="focus-label">To</label>
                </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                <Link to="#" className="btn btn-success w-100"> Search </Link>
            </div>
        </div>
    )
}
