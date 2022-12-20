import './formPages.css';
import usericon from './../../assets/img/icons/user.png';
import greentickicon from './../../assets/img/icons/greentick.png';

import {useState} from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';



const FormTab = (props) => {

  let navigate = useNavigate()

  const onClickFormTab = () => {
    props.activeStatusHandler()
    navigate(props.to)
  }

  return (
    <button className={props.activeStatus? "active_tab" : ""} onClick={onClickFormTab}>
      <img className="icon" src={props.icon} />
      <span>{props.label}</span>
      {props.formStatus? <img className="icon tickicon" src={greentickicon} /> : null}
    </button>
  )
}


const FormDetailPage = () => {

  const [activeTab, setActiveTab] = useState({
    personalDetailsForm:true,
    workHistoryForm:false,
    educationForm:false,
    skillsForm:false,
    professionalReferenceFormStatus:false
  })

  const [personalDetailsFormStatus,setPersonalDetailsFormStatus] = useState(false)
  const [workHistoryFormStatus,setWorkHistoryFormStatus] = useState(false)
  const [educationFormStatus,setEducationFormStatus] = useState(false)
  const [skillsFormStatus,setSkillsFormStatus] = useState(false)
  const [professionalReferenceFormStatus,setProfessionalReferenceFormStatus] = useState(false)

  return (
    <div className="pd main_form_container">

      <div className="main_form_header">
        <div className="main_form_header_heading">
          <span>2</span>
          <h2>Enter Your Details</h2>
        </div>
        <p>Each template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
      </div>

      <div className="form_details_outer_container">
        <div className="form_details_inner_container">

          <div className="form_details_tabs">
            <FormTab
              to="personal-details"
              icon={usericon}
              label="Personal Details"
              activeStatus = {activeTab.personalDetailsForm}
              activeStatusHandler={() => {
                setActiveTab({
                  personalDetailsForm:true,
                  workHistoryForm:false,
                  educationForm:false,
                  skillsForm:false,
                  professionalReferenceFormStatus:false
                })
              }}
              formStatus={personalDetailsFormStatus}
            />
            <FormTab
              to="work-history"
              icon={usericon}
              label="Work History"
              activeStatus = {activeTab.workHistoryForm}
              activeStatusHandler={() => {
                setActiveTab({
                  personalDetailsForm:false,
                  workHistoryForm:true,
                  educationForm:false,
                  skillsForm:false,
                  professionalReferenceFormStatus:false
                })
              }}
              formStatus={workHistoryFormStatus}
            />
            <FormTab
              to="education"
              icon={usericon}
              label="Education"
              activeStatus = {activeTab.educationForm}
              activeStatusHandler={() => {
                setActiveTab({
                  personalDetailsForm:false,
                  workHistoryForm:false,
                  educationForm:true,
                  skillsForm:false,
                  professionalReferenceFormStatus:false
                })
              }}
              formStatus={educationFormStatus}
            />
            <FormTab
              to="skills"
              icon={usericon}
              label="Skills"
              activeStatus = {activeTab.skillsForm}
              activeStatusHandler={() => {
                setActiveTab({
                  personalDetailsForm:false,
                  workHistoryForm:false,
                  educationForm:false,
                  skillsForm:true,
                  professionalReferenceFormStatus:false
                })
              }}
              formStatus={skillsFormStatus}
            />
            <FormTab
              to="professional-reference"
              icon={usericon}
              activeStatus = {activeTab.professionalReferenceForm}
              activeStatusHandler={() => {
                setActiveTab({
                  personalDetailsForm:false,
                  workHistoryForm:false,
                  educationForm:false,
                  skillsForm:false,
                  professionalReferenceFormStatus:true
                })
              }}
              label="Professional Reference"
              formStatus={professionalReferenceFormStatus}
            />
          </div>

          <div className="form_details_container">
            <Outlet context={{
              setPersonalDetailsFormStatus : setPersonalDetailsFormStatus,
              setWorkHistoryFormStatus:setWorkHistoryFormStatus,
              setEducationFormStatus:setEducationFormStatus,
              setSkillsFormStatus:setSkillsFormStatus,
              setProfessionalReferenceFormStatus:setProfessionalReferenceFormStatus
            }} />
          </div>

        </div>
      </div>

    </div>
  )
}


export default FormDetailPage;
