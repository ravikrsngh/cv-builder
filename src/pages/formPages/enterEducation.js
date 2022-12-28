import './formPages.css';

import React,{useState,useRef} from 'react';
import deleteicon from './../../assets/img/icons/delete.png'
import {Link} from 'react-router-dom';


const EducationComponent = ({id,title,start,end,present,onClickDeleteEducationIcon}) => {
  return (
    <div className="info_details_container">
      <div className="">
        <h6>{title}</h6>
        <span>{start} - {present? "Present": end}</span>
      </div>
      <button type="button" className="info_details_del_btn" onClick={() => onClickDeleteEducationIcon(id)}><img src={deleteicon} /></button>
    </div>
  )
}

const EducationFormComponent = ({educationHandler}) => {
  let nameRef = useRef(null)
  let schoolRef = useRef(null)
  let startDateRef = useRef(null)
  let endDateRef = useRef(null)
  let presentRef = useRef(null)
  let courseDescRef = useRef(null)

  const onClickAddEducation = () => {
    let new_education = {
      name:nameRef.current.value,
      school:schoolRef.current.value,
      startDate:startDateRef.current.value,
      endDate:endDateRef.current.value,
      present:presentRef.current.checked,
      courseDesc:courseDescRef.current.value
    }
    educationHandler((prev) => {
      return [...prev,new_education]
    })
    nameRef.current.value = ""
    schoolRef.current.value = ""
    startDateRef.current.value = ""
    endDateRef.current.value = ""
    presentRef.current.checked = false
    courseDescRef.current.value = ""

  }

  return (
    <React.Fragment>
      <div className="form_container">
        <div className="form_element">
          <label>Course Name</label>
          <input type="text" className="input_text" ref={nameRef} required />
        </div>
        <div className="form_element">
          <label>School / University</label>
          <input type="text" className="input_text" ref={schoolRef} required />
        </div>
      </div>
      <div className="form_container">
        <div className="form_element">
          <label>Start Date</label>
          <input type="date" className="input_text" ref={startDateRef} required />
        </div>
        <div className="form_element">
          <label>End Date</label>
          <input type="date" className="input_text" ref={endDateRef} required />
        </div>
      </div>
      <div className="form_container">
        <div className="form_element form_element_checkbox">
          <label>Present</label>
          <input type="checkbox" ref={presentRef} required />
        </div>
      </div>
      <div className="form_container">
        <div className="form_element">
          <label>Course Description</label>
          <textarea className="input_text" ref={courseDescRef} rows="8" required></textarea>
        </div>
      </div>
      <div className="form_container">
        <div className="form_element">
          <button type="button" onClick={onClickAddEducation}>Add</button>
        </div>
      </div>
    </React.Fragment>
  )
}

const EnterEducationPage = () => {

  let [education,setEducation] = useState([])

  const onClickDeleteEducationIcon = (id) => {
    let copy = [...education]
    copy.splice(id,1)
    setEducation(copy)
  }

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

        {education.map((ins,key) => {
          return <EducationComponent key={key} id={key} title={ins.name} start={ins.startDate} end={ins.endDate} present={ins.present} onClickDeleteEducationIcon={onClickDeleteEducationIcon} />
        })}

        <EducationFormComponent educationHandler={setEducation}/>

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
