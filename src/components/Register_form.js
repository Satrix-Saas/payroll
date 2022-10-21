import React, {useEffect, useState } from "react";
import Logo from "./common_component/Logo";
import SubmitButton from "./common_component/Submit_button";
import Textfields from "./common_component/Textfields";
import { Link } from "react-router-dom";
import Heading from "./common_component/Heading";
import SelectInputFields from "./common_component/SelectInputFields";
import options from "./utility/Options";
import { dropDownArray } from "./utility/Dropdownutill";
import $ from 'jquery';

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

  // const header = {

  //   "Content-Type": "multipart/form-data",
  //   "Access-Control-Allow-Origin": "*"
  // }
  // const board = this.props.routeParams.tag;

  const handleSubmit =async  (e) => {
    
  
    
  $.ajax({
    type:"GET",
    url:'http://192.168.0.100:8074/Satrix_Saas/pub/company/index/index',
    data:{q:'idiom'},
    async:true,
    dataType : 'json',   //you may use jsonp for cross origin request
    crossDomain:true,
    success: function(data, status, xhr) {
      console.log(data);
     alert(data.email)
    }
  });
 
  }  
  useEffect(() => {
    
  },[])
    
 
 

  // let handleSubmit = async (e) => {
  //   alert("api");
  //  alert(e.target.elements.full_name.value);

  //   e.preventDefault();
  //   try {
  //     let res = await fetch("http://192.168.0.100:8074/Satrix_Saas/pub/company/index/index", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         full_name: full_name,
  //         org_name: org_name,
  //         email: email,
  //         phone: phone,
  //         password: password,
  //         value: value,
  //         titlevalue: titlevalue

  //       }),
  //       headers:header

  //     });
  //     // console.log(
  //     //   full_name, org_name, email, phone, password, value, titlevalue
  //     // )
  //       let resJson = await res.json();
  //       if (res.status === 200) {
  //         setFull_name("");
  //         setOrg_name("");
  //         setEmail("");
  //         setPhone("");
  //         setPassword("");
  //         setTitle("");
  //         setValue("");
  //       } 
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // const handleSubmit = (e) => {
  //   alert("api");
  // }


  const optionArray = dropDownArray(options, "No_of_employees");
  const optionArray2 = dropDownArray(options, "Title");
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            {/* LOGO */}
            <Logo dashboard="/admin-dashboard" />
            {/* LOGO */}

            <div className="account-box">
              <div className="account-wrapper">
                <Heading title="Register" subtitle="Access to Our Dashboard" />

                {/* FORM START */}
                <form id="register_form">
                  {/* TEXT FIELDS */}
                  <Textfields
                    label="Full Name" type="text" mandatory="*" name="full_name" id="full_name" value={full_name}
                    onChange={onChange_value}
                  />

                  <Textfields
                    label="Organization Name" type="text" mandatory="*" name="org_name" id="org_name"
                  />

                  <Textfields
                    label="Work Email Address" type="text" mandatory="*" name="email" id="email"
                  />

                  <Textfields
                    label="Phone Number" type="tel" mandatory="*" name="phn_num" id="phn_num"
                  />

                  <Textfields
                    label="Password" type="password" mandatory="*" name="password" id="password"
                  />

                  <SelectInputFields
                    label="Number Of Employees" mandatory="*" type="text" select_id="no_of_employees" >
                    {optionArray.map((e) => {
                      return (
                        <option key={e.name} name={e.name} option={e.option} value={e.optionvalue}>
                          {e.optionvalue}
                        </option>
                      );
                    })}
                  </SelectInputFields>

                  <SelectInputFields
                    label="Your Title" mandatory="*" type="text" select_id="title" >
                    {optionArray2.map((e) => {
                      return (
                        <option key={e.name} name={e.name} option={e.option} value={e.optionvalue}>
                          {e.optionvalue}
                        </option>
                      );
                    })}
                  </SelectInputFields>
            
                  <div className="form-group text-center">
                  <button type="button" className="btn btn-primary account-btn" id="register" onClick={handleSubmit}>Register</button>
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
