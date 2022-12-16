import './formPages.css';
import usericon from './../../assets/img/icons/user.png';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';



const FormTab = (props) => {

  let navigate = useNavigate()

  const onClickFormTab = () => {
    navigate(props.to)
  }

  return (
    <button onClick={onClickFormTab}>
      <img className="icon" src={props.icon} />
      <span>{props.label}</span>
    </button>
  )
}


const FormDetailPage = () => {
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
            <FormTab to="personal-details" icon={usericon} label="Personal Details" />
            <FormTab to="work-history" icon={usericon} label="Work History" />
            <FormTab to="education" icon={usericon} label="Education" />
            <FormTab to="skills" icon={usericon} label="Skills" />
            <FormTab to="professional-reference" icon={usericon} label="Professional Reference" />
          </div>

          <div className="form_details_container">
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  )
}


export default FormDetailPage;
