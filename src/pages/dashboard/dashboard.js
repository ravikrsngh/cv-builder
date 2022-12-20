import './dashboard.css';
import usericon from './../../assets/img/icons/user.png';
import editicon from './../../assets/img/icons/edit.png';

import {useState} from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';


const DashboardTab = (props) => {

  let navigate = useNavigate()

  const onClickDashboardTab = () => {
    navigate(props.to)
  }

  return (
    <button onClick={onClickDashboardTab}>
      <img className="icon" src={props.icon} />
      <span>{props.label}</span>
    </button>
  )
}



const Dashboard = () => {

  return (
    <div className="pd main_dashboard_container">
      <div className="dashboard_container">
        <div className="dashboard_tab_container">
          <DashboardTab
            to='account-settings'
            label = 'Account Settings'
            icon = {usericon}
          />
          <DashboardTab
            to='login-and-security'
            label = 'Login and Security'
            icon = {usericon}
          />
          <div className="dashboard_tab_divider"></div>
          <DashboardTab
            to='your-cv'
            label = "Your CV's"
            icon = {usericon}
          />
          <DashboardTab
            to='your-cover-letters'
            label = 'Your Cover Letters'
            icon = {usericon}
          />
          <DashboardTab
            to='your-templates'
            label = 'Your Templates'
            icon = {usericon}
          />
          <DashboardTab
            to='shared-cv'
            label = 'Shared CV'
            icon = {usericon}
          />
          <div className="dashboard_tab_divider"></div>
          <DashboardTab
            to='your-subscription'
            label = 'Your Subscription'
            icon = {usericon}
          />
          <DashboardTab
            to='purchase-history'
            label = 'Purchase History'
            icon = {usericon}
          />
          <div className="dashboard_tab_divider"></div>
          <DashboardTab
            to='our-team'
            label = 'Our Team'
            icon = {usericon}
          />
          <DashboardTab
            to='our-services'
            label = 'Our Services'
            icon = {usericon}
          />
        </div>
        <div className="dashboard_sections">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
