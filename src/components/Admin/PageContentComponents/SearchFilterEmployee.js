import React from 'react'
import { Link } from 'react-router-dom';
import { dropDownArray } from '../../utility/Dropdownutill';
import options from '../../utility/Options';

export default function SearchFilterEmployee() {
    const optionArrayDesignation = dropDownArray(options, "Designation");
    return (
        <>
            <div className="row filter-row">
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Employee ID</label>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <input type="text" className="form-control floating" />
                        <label className="focus-label">Employee Name</label>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus select-focus">
                        <select className="select floating">
                            <option>--</option>
                            {optionArrayDesignation.map((e) => {
                                return (
                                    <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                        {e.optionvalue}
                                    </option>
                                );
                            })}
                        </select>
                        <label className="focus-label">Designation</label>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="d-grid">
                        <Link to="#" className="btn btn-success w-100"> Search </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

