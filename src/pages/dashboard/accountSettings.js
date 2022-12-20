import './dashboard.css';
import editicon from './../../assets/img/icons/edit.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

const AccountSettings = () => {
  return (
    <React.Fragment>
    <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Your Account</h3></div>
    <form>
      <div className="accounts_form_container">
        <div className="accounts_form_element_profile_pic">
          <div className="accounts_profile_pic">

          </div>
          <label for="upload_profile_pic">Upload Photo</label>
          <input id="upload_profile_pic" type="file" />
        </div>
      </div>
      <div className="accounts_form_container">
        <div className="accounts_form_element">
          <div>
            <label className="accounts_form_element_label">Name</label>
            <input type="text" value="Ravi Kumar Singh" readonly />
          </div>
          <img className="icon" src={editicon} />
        </div>
        <div className="accounts_form_element">
          <div>
            <label className="accounts_form_element_label">Email Address</label>
            <input type="email" value="ravi@gmail.com" readonly />
          </div>
          <img className="icon" src={editicon} />
        </div>
      </div>

      <div className="accounts_form_container">
        <div className="accounts_form_element">
          <div>
            <label className="accounts_form_element_label">Phone Number</label>
            <input type="text" value="657389200" readonly />
          </div>
          <img className="icon" src={editicon} />
        </div>
        <div className="accounts_form_element">
          <div>
            <label className="accounts_form_element_label">Work Phone Number</label>
            <input type="text" value="9046372822" readonly />
          </div>
          <img className="icon" src={editicon} />
        </div>
      </div>

      <div className="accounts_form_container">
        <div className="accounts_form_element">
          <button type="submit">Save Changes</button>
        </div>
      </div>

    </form>
    </React.Fragment>
  )
}

export default AccountSettings;
