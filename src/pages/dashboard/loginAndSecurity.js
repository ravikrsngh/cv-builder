import './dashboard.css';
import editicon from './../../assets/img/icons/edit.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

const LoginAndSecurity = () => {
  return (
    <React.Fragment>
    <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Change Password</h3></div>
    <form>
      <div className="accounts_form_container">
        <div className="accounts_form_element">
          <div>
            <label className="accounts_form_element_label">Current Password</label>
            <input type="password" className="input_element" placeholder="Enter your password"  required/>
          </div>
        </div>
      </div>
      <div className="accounts_form_container">
        <div className="accounts_form_element">
          <div>
            <label className="accounts_form_element_label">New Password</label>
            <input type="password" className="input_element" placeholder="Enter your new password"  required/>
          </div>
        </div>
      </div>
      <div className="accounts_form_container">
        <div className="accounts_form_element">
          <div>
            <label className="accounts_form_element_label">Confirm New Password</label>
            <input type="password" className="input_element" placeholder="Enter your new password again"  required/>
          </div>
        </div>
      </div>
      <div className="accounts_form_container">
        <div className="accounts_form_element">
          <button type="submit">Change Password</button>
        </div>
      </div>


    </form>
    </React.Fragment>
  )
}

export default LoginAndSecurity;
