import './dashboard.css';
import editicon from './../../assets/img/icons/edit.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';


const AccountSettingsInputField = ({label,type,defaultValue,editable}) => {

  let [requiredField,setRequiredField] = useState(true)
  let [readonlyField,setReadOnlyField] = useState(true)

  return (
    <div className="accounts_form_element">
      <div>
        <label className="accounts_form_element_label">{label}</label>
        <input type={type} defaultValue={defaultValue} required={requiredField} readOnly={readonlyField} />
      </div>
      { editable? <img className="icon" src={editicon} onClick={() => setReadOnlyField(!readonlyField)} /> : null }

    </div>
  )
}

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
        <AccountSettingsInputField label="Name" type="text" defaultValue="Ravi Kumar Singh" editable={false} />
        <AccountSettingsInputField label="Email Address" type="email" defaultValue="ravi@gmail.com" editable={false} />
      </div>

      <div className="accounts_form_container">
        <AccountSettingsInputField label="Phone Number" type="text" defaultValue="657389200" editable={true} />
        <AccountSettingsInputField label="Work Phone Number" type="text" defaultValue="657389200" editable={true} />
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
