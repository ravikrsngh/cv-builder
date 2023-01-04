import './formPages.css';

import React,{useState,useRef} from 'react';
import deleteicon from './../../assets/img/icons/delete.png'
import {Link} from 'react-router-dom';


const SkillComponent = ({id,name,proficiency,onClickDeleteSkillIcon}) => {
  return (
    <div className="info_details_container">
      <div className="">
        <h6>{name}</h6>
        <span>{proficiency}</span>
      </div>
      <button type="button" className="info_details_del_btn" onClick={() => onClickDeleteSkillIcon(id)}><img src={deleteicon} /></button>
    </div>
  )
}

const SkillFormComponent = ({skillsHandler}) => {

  let nameRef = useRef(null)
  let proficiencyRef = useRef(null)

  const onClickAddSkills = () => {
    let new_skill = {
      name:nameRef.current.value,
      proficiency:proficiencyRef.current.value,
    }
    skillsHandler((prev) => {
      return [...prev,new_skill]
    })
    nameRef.current.value = ""
    proficiencyRef.current.value = ""
  }

  return (
    <React.Fragment>

    <div className="form_container">
      <div className="form_element">
        <label>Skill Name</label>
        <input type="text" ref={nameRef} className="input_text" required />
      </div>
      <div className="form_element">
        <label>Proficiency</label>
        <select className="input_select" defaultValue="" ref={proficiencyRef}>
          <option value="">Keep Blank</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advance">Advance</option>
        </select>
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <button type="button" onClick={onClickAddSkills}>Add</button>
      </div>
    </div>

    </React.Fragment>
  )
}

const EnterSkillsPage = () => {

  let [skills,setSkills] = useState([])

  const onClickDeleteSkillIcon = (id) => {
    let copy = [...skills]
    copy.splice(id,1)
    setSkills(copy)
  }

  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Skills</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form">

        {skills.map((ins,key) => {
          return <SkillComponent key={key} id={key} name={ins.name} proficiency={ins.proficiency} onClickDeleteSkillIcon={onClickDeleteSkillIcon} />
        })}

        <SkillFormComponent skillsHandler={setSkills} />

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
