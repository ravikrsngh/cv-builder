import './formPages.css';
import React from 'react';
import {Link} from 'react-router-dom';

const EnterPersonalDetailsPage = () => {
  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Personal Details</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form">
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
