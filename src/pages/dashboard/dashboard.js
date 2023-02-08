import './dashboard.css';
import usericon from './../../assets/img/icons/user.png';
import editicon from './../../assets/img/icons/edit.png';
import roundicon from './../../assets/img/icons/roundicon.png';

import {useState} from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';


const DashboardTab = (props) => {

  let navigate = useNavigate()

  const onClickDashboardTab = () => {
    props.changeTab(props.to)
    navigate(props.to)
  }

  return (
    <button className={props.active? "active_tab" : ""} onClick={onClickDashboardTab}>
      <img className="icon" src={props.icon} />
      <span>{props.label}</span>
    </button>
  )
}



const Dashboard = () => {

  let [currentTab, setCurrentTab] = useState('account-settings')
  let user_type = "team"

  if (user_type == "team") {
    return (
      <div className="pd main_dashboard_container">
        <div className="dashboard_container">
          <div className="dashboard_tab_container">
            <div className="dashboard_tab_profile">
              <div className="dashboard_tab_profile_pic">
                <img src={roundicon} />
              </div>
              <div className="dashboard_tab_profile_info">
                <h4>Ravi Kumar Singh</h4>
                <span>ravi@gmail.com</span>
              </div>
            </div>
            <DashboardTab
              to='account-settings'
              label = 'Account Settings'
              icon = {usericon}
              active = {currentTab == "account-settings"? true:false}
              changeTab = {setCurrentTab}
            />
            <DashboardTab
              to='login-and-security'
              label = 'Login and Security'
              icon = {usericon}
              active = {currentTab == "login-and-security"? true:false}
              changeTab = {setCurrentTab}
            />
            <div className="dashboard_tab_divider"></div>
            <DashboardTab
              to='service-requests'
              label = "Service Requests"
              icon = {usericon}
              active = {currentTab == "service-requests"? true:false}
              changeTab = {setCurrentTab}
            />
          </div>
          <div className="dashboard_sections">
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="pd main_dashboard_container">
      <div className="dashboard_container">
        <div className="dashboard_tab_container">
          <div className="dashboard_tab_profile">
            <div className="dashboard_tab_profile_pic">
              <img src={roundicon} />
            </div>
            <div className="dashboard_tab_profile_info">
              <h4>Ravi Kumar Singh</h4>
              <span>ravi@gmail.com</span>
            </div>
          </div>
          <DashboardTab
            to='account-settings'
            label = 'Account Settings'
            icon = {usericon}
            active = {currentTab == "account-settings"? true:false}
            changeTab = {setCurrentTab}
          />
          <DashboardTab
            to='login-and-security'
            label = 'Login and Security'
            icon = {usericon}
            active = {currentTab == "login-and-security"? true:false}
            changeTab = {setCurrentTab}
          />
          <DashboardTab
            to='your-credits'
            label = 'Your Credits'
            icon = {usericon}
            active = {currentTab == "your-credits"? true:false}
            changeTab = {setCurrentTab}
          />
          <div className="dashboard_tab_divider"></div>
          <DashboardTab
            to='your-cv'
            label = "Your CV's"
            icon = {usericon}
            active = {currentTab == "your-cv"? true:false}
            changeTab = {setCurrentTab}
          />
          <DashboardTab
            to='your-cover-letters'
            label = 'Your Cover Letters'
            icon = {usericon}
            active = {currentTab == "your-cover-letters"? true:false}
            changeTab = {setCurrentTab}
          />
          <DashboardTab
            to='your-templates'
            label = 'Your Templates'
            icon = {usericon}
            active = {currentTab == "your-templates"? true:false}
            changeTab = {setCurrentTab}
          />
          <DashboardTab
            to='shared-cv'
            label = 'Shared CV'
            icon = {usericon}
            active = {currentTab == "shared-cv"? true:false}
            changeTab = {setCurrentTab}
          />
          <div className="dashboard_tab_divider"></div>
          <DashboardTab
            to='your-subscription'
            label = 'Your Subscription'
            icon = {usericon}
            active = {currentTab == "your-subscription"? true:false}
            changeTab = {setCurrentTab}
          />
          <DashboardTab
            to='purchase-history'
            label = 'Purchase History'
            icon = {usericon}
            active = {currentTab == "purchase-history"? true:false}
            changeTab = {setCurrentTab}
          />
          <div className="dashboard_tab_divider"></div>
          <DashboardTab
            to='our-team'
            label = 'Our Team'
            icon = {usericon}
            active = {currentTab == "our-team"? true:false}
            changeTab = {setCurrentTab}
          />
          <DashboardTab
            to='our-services'
            label = 'Our Services'
            icon = {usericon}
            active = {currentTab == "our-services"? true:false}
            changeTab = {setCurrentTab}
          />
        </div>
        <div className="dashboard_sections">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const TeamDashboard = () => {

  let [currentTab, setCurrentTab] = useState('account-settings')


}

export default Dashboard;
