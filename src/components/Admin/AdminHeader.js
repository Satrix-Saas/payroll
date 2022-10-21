import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeaderMenu from './HeaderComponents/AdminHeaderMenu'
import AdminHeading from './HeaderComponents/AdminHeading'
import AdminLogo from './HeaderComponents/AdminLogo'
import AdminMobileMenu from './HeaderComponents/AccountMenu'
import Flag from './HeaderComponents/Flag'
import Messages from './HeaderComponents/Messages'
import Notifications from './HeaderComponents/Notifications'
import SearchBar from './HeaderComponents/SearchBar'
import AccountMenu from './HeaderComponents/AccountMenu'
import MobileMenu from './HeaderComponents/MobileMenu'


export default function AdminHeader() {
  return (
    <>
      <div className="main-wrapper">
        <div className="header">
          
          <Link id="toggle_btn"  class="rounded-circle">
					<span className="bar-icon " >
					<i class="fas fa-bars" id="hambtn"></i>
					</span>
				</Link>
        <AdminLogo dashboard="/admindashboard" />
   
        <AdminHeaderMenu/>
        <Link id="mobile_btn" className="mobile_btn" to="#sidebar"><i className="fa fa-bars"></i></Link>

        <ul className="nav user-menu">
          <SearchBar placeholder="Search Here"/>
          <Flag langname="English"/>
          <Notifications/>
          <Messages/>
          <AccountMenu profile="My Account"setting="Settings" logout="Logout"/>
          </ul>
          <MobileMenu/>
        </div>
      </div>
    </>
  )
}
