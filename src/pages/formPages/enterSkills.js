import './formPages.css';

import React from 'react';
import {Link} from 'react-router-dom';


const SkillFormComponent = () => {
  return (
    <React.Fragment>

    <div className="form_container">
      <div className="form_element">
        <label>Skill Name</label>
        <input type="text" className="input_text" required />
      </div>
      <div className="form_element">
        <label>Proficiency</label>
        <select className="input_select">
          <option selected>Beginner</option>
          <option>Intermediate</option>
          <option>Advance</option>
        </select>
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

const EnterSkillsPage = () => {
  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Skills</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form">

        <SkillFormComponent />

        <div className="form_container">
          <div className="form_element">
            <button type="submit">Next</button>
          </div>
        </div>

      </form>
    </React.Fragment>
  )
}

export default EnterSkillsPage;
