import './formPages.css';

import React from 'react';
import {Link} from 'react-router-dom';

const EducationFormComponent = () => {
  return (
    <React.Fragment>
      <div className="form_container">
        <div className="form_element">
          <label>Course Name</label>
          <input type="text" className="input_text" required />
        </div>
        <div className="form_element">
          <label>School / University</label>
          <input type="text" className="input_text" required />
        </div>
      </div>
      <div className="form_container">
        <div className="form_element">
          <label>Start Date</label>
          <input type="date" className="input_text" required />
        </div>
        <div className="form_element">
          <label>End Date</label>
          <input type="date" className="input_text" required />
        </div>
      </div>
      <div className="form_container">
        <div className="form_element form_element_checkbox">
          <label>Present</label>
          <input type="checkbox" required />
        </div>
      </div>
      <div className="form_container">
        <div className="form_element">
          <label>Course Description</label>
          <textarea className="input_text" rows="8" required></textarea>
        </div>
      </div>
      <div className="form_container">
        <div className="form_element">
          <button type="button">Add</button>
        </div>
      </div>
    </React.Fragment>
  )
}

const EnterEducationPage = () => {
  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Education</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form">

        <div className="form_container">
          <div className="form_element form_element_checkbox">
            <label>I have no formal educational qualifications.</label>
            <input type="checkbox" required />
          </div>
        </div>
        
        <div className="form_container">
          <div className="form_element form_element_checkbox">
            <label>I have no formal educational qualifications. I have great work experience.</label>
            <input type="checkbox" required />
          </div>
        </div>

        <EducationFormComponent />

        <div className="form_container">
          <div className="form_element">
            <button type="submit">Next</button>
          </div>
        </div>

      </form>
    </React.Fragment>
  )
}

export default EnterEducationPage;
