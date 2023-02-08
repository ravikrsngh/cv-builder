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

const AdditionalTeamForm = () => {
  let bio = "Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company."
  return (
    <>
    <div className="accounts_form_container">
      <div className="accounts_form_element accounts_form_element_long">
        <div>
          <label className="accounts_form_element_label">About</label>
          <textarea defaultValue={bio} required={true} readOnly={true}></textarea>
        </div>
        <img className="icon" src={editicon} />
      </div>
    </div>
    <div className="accounts_form_container">
      <div className="accounts_form_element accounts_form_element_long">
        <div>
          <label className="accounts_form_element_label">Services</label>
          <div className="accounts_services">
            <span>CV Writer</span>
            <span>Cover Letter Writer</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

const AccountSettings = () => {
  const user_type = "team"
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
        {user_type == "team"? <AccountSettingsInputField label="Professional Title" type="text" defaultValue="Professional CV Writer" editable={true} /> : <AccountSettingsInputField label="Email Address" type="email" defaultValue="ravi@gmail.com" editable={false} /> }
      </div>

      <div className="accounts_form_container">
        <AccountSettingsInputField label="Phone Number" type="text" defaultValue="657389200" editable={true} />
        {user_type == "team"? <AccountSettingsInputField label="Email Address" type="email" defaultValue="ravi@gmail.com" editable={false} /> : <AccountSettingsInputField label="Work Phone Number" type="text" defaultValue="78585234696" editable={false} /> }
      </div>

      { user_type == "team"? <AdditionalTeamForm /> : null }



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
