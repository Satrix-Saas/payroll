import React, {useEffect, useState } from "react";
import Logo from "./common_component/Logo";
import Textfields from "./common_component/Textfields";
import { Link } from "react-router-dom";
import Heading from "./common_component/Heading";
import SelectInputFields from "./common_component/SelectInputFields";
import options from "./utility/Options";
import { dropDownArray } from "./utility/Dropdownutill";

export default function Register_form() {
  document.title = "Register - HRMS admin template";
  const [full_name, setFull_name] = useState("");
  const [org_name, setOrg_name] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [titlevalue, setTitle] = useState("");

  const onChange_value = (e) => {
    setFull_name(e.target.value);
    setOrg_name(e.target.value);
    setEmail(e.target.value);
    setPhone(e.target.value);
    setPassword(e.target.value);
    setTitle(e.target.value);
  }
  const employee_value = (e) => {
    setValue(e.target.value);
  }

  const optionArray = dropDownArray(options, "No_of_employees");
  const optionArray2 = dropDownArray(options, "Title");
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container"> 
          

            <div className="account-box">
            <Logo dashboard="/register" />
              <div className="account-wrapper">

                <Heading title="Register" subtitle="Access to Our Dashboard" />

                {/* FORM START */}
                <form id="register_form">
                  {/* TEXT FIELDS */}
                  <Textfields
                    label="Full Name" type="text" mandatory="*" name="name" id="full_name" />

                  <Textfields
                    label="Organization Name" type="text" mandatory="*" name="org_name" id="org_name"
                  />

                  <Textfields
                    label="Work Email Address" type="text" mandatory="*" name="email" id="email"
                  />

                  <Textfields
                    label="Phone Number" type="tel" mandatory="*" name="cont_no." id="phn_num"
                  />

                  <Textfields
                    label="Password" type="password" mandatory="*" name="password" id="password"
                  />

                  <SelectInputFields
                    label="Number Of Employees" mandatory="*" type="text" select_id="no_of_employees" name="org_size">
                    {optionArray.map((e) => {
                      return (
                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                          {e.optionvalue}
                        </option>
                      );
                    })}
                  </SelectInputFields>

                  <SelectInputFields
                    label="Your Title" mandatory="*" type="text" select_id="title" name="type">
                    {optionArray2.map((e) => {
                      return (
                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                          {e.optionvalue}
                        </option>
                      );
                    })}
                  </SelectInputFields>
            
                  <div className="form-group text-center">
                  <button type="button" className="btn btn-primary account-btn" id="register" onClick >Register</button>
                  </div>
                  <div className="account-footer">
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </div>
                </form>
                {/* FORM CLOSED */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
