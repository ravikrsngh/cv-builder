import './formPages.css';
import dropdownicon from './../../assets/img/icons/dropdown_icon.png'
import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';


const AdditionalDetailsFormComponent = (props) => {
  if (!props.display) {
    return
  }
  return (
    <React.Fragment>

    <div className="form_container">
      <div className="form_element">
        <label>Professional Title</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>Address Line 1</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>Address Line 2</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>Country</label>
        <input type="text" className="input_text" />
      </div>
      <div className="form_element">
        <label>State</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>City</label>
        <input type="text" className="input_text" />
      </div>
      <div className="form_element">
        <label>Zip Code</label>
        <input type="text" className="input_text" />
      </div>
    </div>

    </React.Fragment>
  )
}

const EnterPersonalDetailsPage = () => {

  const {setPersonalDetailsFormStatus} = useOutletContext()

  const [additionalFormDisplay, setAdditionalFormDisplay] = useState(true)

  const navigate = useNavigate()

  const onClickAdditionalFormDropdown = () => {
    if (additionalFormDisplay) {
      setAdditionalFormDisplay(false)
    } else {
      setAdditionalFormDisplay(true)
    }
  }

  const onSubmitPersonalDetailsForm = () => {
    setPersonalDetailsFormStatus(true)
    navigate('/enter-your-details/work-history')
  }

  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Personal Details</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form" onSubmit={onSubmitPersonalDetailsForm}>
        <div className="form_container">
          <div className="form_element">
            <label>About you</label>
            <textarea className="input_text" rows="8" required></textarea>
          </div>
        </div>
        <div className="form_container">
          <div className="form_element">
            <label>First Name</label>
            <input type="text" className="input_text" rows="8" required />
          </div>
          <div className="form_element">
            <label>Last Name</label>
            <input type="text" className="input_text" rows="8" required />
          </div>
        </div>
        <div className="form_container">
          <div className="form_element">
            <label>Email</label>
            <input type="email" className="input_text" rows="8" required />
          </div>
          <div className="form_element">
            <label>Phone Number</label>
            <input type="text" className="input_text" rows="8" required />
          </div>
        </div>
        <div className="form_collapse_container">
          <div className="form_collapse_container_header">
            <h3>Additional Details</h3>
            <button type="button" onClick={onClickAdditionalFormDropdown}><img src={dropdownicon} /></button>
          </div>
          <AdditionalDetailsFormComponent display={additionalFormDisplay} />
        </div>
        <div className="form_container">
          <div className="form_element">
            <button type="submit">Next</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default EnterPersonalDetailsPage;
