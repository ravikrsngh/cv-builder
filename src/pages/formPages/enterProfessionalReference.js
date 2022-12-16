import './formPages.css';

import React from 'react';
import {Link} from 'react-router-dom';


const ProfRefFormComponent = () => {
  return (
    <React.Fragment>

    <div className="form_container">
      <div className="form_element">
        <label>Referee</label>
        <input type="text" className="input_text" required />
      </div>
      <div className="form_element">
        <label>Contact Email</label>
        <input type="text" className="input_text" required />
      </div>
      <div className="form_element">
        <label>Contact Number</label>
        <input type="text" className="input_text" required />
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


const EnterProfessionalReferencePage = () => {
  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Professional Reference</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form">

        <ProfRefFormComponent />

        <div className="form_container">
          <div className="form_element">
            <button type="submit">Preview</button>
          </div>
        </div>

      </form>
    </React.Fragment>
  )
}

export default EnterProfessionalReferencePage;
