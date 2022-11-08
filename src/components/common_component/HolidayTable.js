import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from '../Admin/AdminHeader'
import Sidebar from '../Admin/HeaderComponents/Sidebar'
import DashboardPageHeading from '../Admin/PageContentComponents/DashboardPageHeading'
import HolidayContent from '../Admin/PageContentComponents/HolidayContent'
import TwoColSideBar from '../Admin/TwoColSideBar'

import AddHoliday from '../popupForms/AddHoliday'
import DeleteEmp from '../popupForms/DeleteEmp'


export default function HolidayTable() {
    return (
        <>

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
                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <DashboardPageHeading pageheading="Holidays 2022" pageworking="Holidays" />
                            </div>


                            <div className="col-auto float-end ms-auto">
                                <Link to="#" className="btn add-btn active" data-bs-toggle="modal" data-bs-target="#add_holiday"><i className="fa fa-plus"></i> Add Holiday</Link>
                            </div>

                            <div id="add_holiday" className="modal custom-modal fade" role="dialog">
                                <AddHoliday submit="Submit" id="holiday_btn" action="Add holiday" />
                            </div>
                            <div id="edit_holiday" className="modal custom-modal fade" role="dialog">
                                <AddHoliday submit="Submit" action="Add holiday" />
                            </div>
                            <div className="modal custom-modal fade" id="delete_holiday" role="dialog">
                                <DeleteEmp delete="Delete" cancel="Cancel" />
                            </div>

                        </div>
                    </div>
                    <div> <HolidayContent /></div>
                </div>
            </div>
        </>
    )
}
