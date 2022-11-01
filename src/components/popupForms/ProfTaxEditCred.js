import React from 'react'
import { dropDownArray } from '../utility/Dropdownutill';
import options from '../utility/Options';

export default function ProfTaxEditCred(props) {
    const optionArrayCompany = dropDownArray(options, "State");
    return (

        <>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label className="col-form-label">{props.selectname}</label>
                        <select className='form-control form-select'>
                            <option value="">--</option>
                            {optionArrayCompany.map((e) => {
                                return (
                                    <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                        {e.optionvalue}
                                    </option>
                                );
                            })}
                        </select>

                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label className="col-form-label">{props.username}</label>
                        <input className="form-control" type={props.typeofusername} />
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <label className="col-form-label">{props.password}</label>
                        <input className="form-control" type={props.typeofpassword} />
                    </div>
                </div>
            </div>
        </>

    )
}
