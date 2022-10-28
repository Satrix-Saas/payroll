import Logo from "./common_component/Logo";
import SubmitButton from "./common_component/Submit_button";
import Textfields from "./common_component/Textfields";
import { Link } from "react-router-dom";
import Heading from "./common_component/Heading";
import SelectInputFields from "./common_component/SelectInputFields";
import options from "./utility/Options";
import { dropDownArray } from "./utility/Dropdownutill";
export default function Register_form() {
  document.title = "Register - HRMS admin template";

  const optionArray = dropDownArray(options, "No_of_employees");
  const optionArray2 = dropDownArray(options, "Title");
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container"> 
          

            <div className="account-box">
                        {/* LOGO */}
            <Logo dashboard="/admin-dashboard" />
            {/* LOGO */}
              <div className="account-wrapper">
        
                <Heading title="Register" subtitle="Access to Our Dashboard" />

                {/* FORM START */}
                <form id="register_form">
                  {/* TEXT FIELDS */}
                  <Textfields
                    label="Full Name"
                    type="text"
                    mandatory="*"
                    name="full_name"
                    id="full_name"
                  />
                  <Textfields
                    label="Organization Name"
                    type="text"
                    mandatory="*"
                    name="org_name"
                    id="org_name"
                  />
                  <Textfields
                    label="Work Email Address"
                    type="text"
                    mandatory="*"
                    name="email"
                    id="email"
                  />
                  <Textfields
                    label="Phone Number"
                    type="tel"
                    mandatory="*"
                    name="phn_num"
                    id="phn_num"
                  />
                  <Textfields
                    label="Password"
                    type="password"
                    mandatory="*"
                    name="password"
                    id="password"
                  />

                  <SelectInputFields
                    label="Number Of Employees"
                    mandatory="*"
                    type="text"
                    select_id="no_of_employees"
                  >
                    {optionArray.map((e) => {
                      return (
                        <option key={e.name} name={e.name} option={e.option}>
                          {e.optionvalue}
                        </option>
                      );
                    })}
                  </SelectInputFields>

                  <SelectInputFields
                    label="Your Title"
                    mandatory="*"
                    type="text"
                    select_id="title">

                    {optionArray2.map((e) => {
                      return (
                        <option key={e.name} name={e.name} option={e.option}>
                          {e.optionvalue}
                        </option>
                      );
                    })}
                  </SelectInputFields>

                  <SubmitButton
                   submitvalue="Register" 
                  btn_id="register" />

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
