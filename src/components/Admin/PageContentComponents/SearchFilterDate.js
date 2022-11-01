import React from 'react'
import { dropDownArray } from '../../utility/Dropdownutill';
import options from '../../utility/Options';

export default function SearchFilterDate() {
    const optionArrayMonth = dropDownArray(options, "Month");
    const optionArrayYear = dropDownArray(options, "Year");

    return (
        <>
        <div className="row filter-row">
            <div className="col-sm-3">
                <div className="form-group form-focus">
                    <div className="cal-icon">
                        <input type="text" className="form-control floating datetimepicker" />
                    </div>
                    <label className="focus-label">Date</label>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="form-group form-focus select-focus">
                    <select className="select floating">
                        <option>-</option>
                        {optionArrayMonth.map((e) => {
                            return (
                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                    {e.optionvalue}
                                </option>
                            );
                        })}
                    </select>
                    <label className="focus-label">Select Month</label>
                </div>
            </div>
            
            <div className="col-sm-3">
                <div className="form-group form-focus select-focus">
                    <select className="select floating">
                    <option>-</option>
                    {optionArrayYear.map((e) => {
                            return (
                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                    {e.optionvalue}
                                </option>
                            );
                        })}
                    </select>
                    <label className="focus-label">Select Year</label>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="d-grid">
                    <a href="/" className="btn btn-success"> Search </a>
                </div>
            </div>
                    </div>
                    </>
    )
}
 