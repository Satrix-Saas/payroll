import React from 'react'
import Textfields from './common_component/Textfields'
import SelectInputFields from './common_component/SelectInputFields'
import { dropDownArray } from "../components/utility/Dropdownutill";
import options from '../components/utility/Options'
import Heading from '../components/common_component/Heading';
import Logo from '../components/common_component/Logo'
import { Link } from 'react-router-dom';
import AdminHeader from './Admin/AdminHeader'
import Sidebar from './Admin/HeaderComponents/Sidebar'
import TwoColSideBar from './Admin/TwoColSideBar'
import AdminHeading from './Admin/HeaderComponents/AdminHeading';


export default function BasicDetails() {
    document.title = "Basic details";

    const optionArray2 = dropDownArray(options, "State");
    return (
        <>
            <div className="main-wrapper">

                <AdminHeader />
                <div className="sidebar" id="sidebar">
                    <div className="sidebar-inner slimscroll">
                        <div id="sidebar-menu" className="sidebar-menu">
                            <Sidebar />
                        </div></div></div>
                <div className="two-col-bar" id="two-col-bar">
                    <TwoColSideBar />
                </div>

                <div className="page-wrapper">

                    <div className="content container-fluid">
                        <AdminHeading admin=" Employee!" dashboard="Address & Tax Setup" />
                        <div className="account-page">
                            <div className="main-wrapper">
                                <div className="account-content">
                                    <div className="container">


                                        <div className="account-box">
                                            <Logo dashboard="/basicdetails" />
                                            <div className="account-wrapper">
                                                <Heading title="Address & Tax Setup" subtitle="Enter Basic Details" />

                                                {/* FORM START */}
                                                <form id="address_taxsetup">
                                                    <Textfields label="Company Name" mandatory="*" type="text" name="com_name" id="com_name" content="The name of the legal entity." />

                                                    <Textfields label="Brand Name" mandatory="*" type="text" name="brand_name" id="brand_name" content="your company is publicly known by a different brand name, then please enter that here." />

                                                    <Textfields label="Registered Address" mandatory="*" type="text" name="address" id="address" content="If you have a GSTIN, provide the address mentioned on your GST certificate." />

                                                    <SelectInputFields
                                                        label="State" mandatory="*" type="text" select_id="state" >
                                                        {optionArray2.map((e) => {
                                                            return (
                                                                <option key={e.name} name={e.name} option={e.option} value={e.optionvalue}>
                                                                    {e.optionvalue}
                                                                </option>
                                                            );
                                                        })}
                                                    </SelectInputFields>

                                                    <Textfields label="PIN code" mandatory="*" type="text" name="pincode" id="pincode" />

                                                    <Textfields label="Company PAN" mandatory="*" type="text" name="pan_num" id="pan_num" content="You can verify your PAN" links=" here." />
                                                    <Textfields label="Company TAN" mandatory="*" type="text" name="tan_num" id="tan_num" content="You can verify your PAN" links=" here." />
                                                    <Textfields label="Company GSTIN" mandatory="*" type="text" name="gstin" id="gstin" content="Enter a valid GSTIN to claim GST credit on our invoices." links=" Details" />
                                                    <div className="form-group text-center">
                                                        <Link to="/employeeonboarding">  <button type="button" className="btn btn-primary account-btn" id="next">Next</button></Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
