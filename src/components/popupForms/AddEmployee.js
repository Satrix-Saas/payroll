import React from 'react'
import SelectInputFields from '../common_component/SelectInputFields';
import { dropDownArray } from '../utility/Dropdownutill';
import options from '../utility/Options';

export default function AddEmployee() {
    const optionArrayCompany = dropDownArray(options,"Company");
    const optionArrayDepartment = dropDownArray(options, "Department");
    const optionArrayDesignation = dropDownArray(options, "Designation");

    return (
       
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Employee</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Last Name</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Username <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                        <input className="form-control" type="email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Password</label>
                                        <input className="form-control" type="password" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Confirm Password</label>
                                        <input className="form-control" type="password" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Employee ID <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Joining Date <span className="text-danger">*</span></label>
                                        <div className="cal-icon"><input className="form-control datetimepicker" type="text" /></div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Phone </label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <SelectInputFields
                                        label="Company" mandatory="*" type="text" select_id="company" name="company">
                                        {optionArrayCompany.map((e) => {
                                            return (
                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                    {e.optionvalue}
                                                </option>
                                            );
                                        })}
                                    </SelectInputFields>
                                </div>
                                <div className="col-md-6">
                                    <SelectInputFields
                                        label="Department" mandatory="*" type="text" select_id="department" name="department">
                                        {optionArrayDepartment.map((e) => {
                                            return (
                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                    {e.optionvalue}
                                                </option>
                                            );
                                        })}
                                    </SelectInputFields>
                                </div>
                                <div className="col-md-6">
                                    <SelectInputFields
                                        label="Designation" mandatory="*" type="text" select_id="designation" name="designation">
                                        {optionArrayDesignation.map((e) => {
                                            return (
                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                    {e.optionvalue}
                                                </option>
                                            );
                                        })}
                                    </SelectInputFields>
                                </div>
                            </div>
                            <div className="table-responsive m-t-15">
                                <table className="table table-striped custom-table">
                                    <thead>
                                        <tr>
                                            <th>Module Permission</th>
                                            <th className="text-center">Read</th>
                                            <th className="text-center">Write</th>
                                            <th className="text-center">Create</th>
                                            <th className="text-center">Delete</th>
                                            <th className="text-center">Import</th>
                                            <th className="text-center">Export</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Holidays</td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Leaves</td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Clients</td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Projects</td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tasks</td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Chats</td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Assets</td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Timing Sheets</td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input  type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="text-center">
                                                <input type="checkbox" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="submit-section">
                                <button className="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    )
}
