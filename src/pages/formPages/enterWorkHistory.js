import './formPages.css';

import React,{useState,useRef} from 'react';
import Input from './../../components/formComponents/inputs'
import deleteicon from './../../assets/img/icons/delete.png'
import {Link} from 'react-router-dom';


const JobComponent = ({id,title,start,end,present,onClickDeleteJobIcon}) => {
  return (
    <div className="info_details_container">
      <div className="">
        <h6>{title}</h6>
        <span>{start} - {present? "Present": end}</span>
      </div>
      <button type="button" className="info_details_del_btn" onClick={() => onClickDeleteJobIcon(id)}><img src={deleteicon} /></button>
    </div>
  )
}


const JobFormComponent = ({jobsHandler}) => {

  let jobTitleRef = useRef(null)
  let startDateRef = useRef(null)
  let endDateRef = useRef(null)
  let presentRef = useRef(null)
  let jobDescRef = useRef(null)

  const [jobForm,setJobForm] = useState({
    formElements:[
      [
        {
          type:"text",
          label:"Job Title",
          ref:jobTitleRef,
          required:false,
          removeable:false,
          removedState:false
        },
      ],
      [
        {
          type:"date",
          label:"Start Date",
          ref:startDateRef,
          required:false,
          removeable:true,
          removedState:false
        },
        {
          type:"date",
          label:"End Date",
          ref:endDateRef,
          required:false,
          removeable:true,
          removedState:false
        },
      ],
      [
        {
          type:"checkbox",
          label:"Present",
          ref:presentRef,
          required:false,
          removeable:true,
          removedState:false
        }
      ],
      [
        {
          type:"textarea",
          label:"Job Description",
          ref:jobDescRef,
          required:false,
          removeable:true,
          removedState:false
        }
      ]

    ]
  })

  const onClickAddJob = () => {
    console.log("hello");
    let new_job = {
      title:jobTitleRef.current?.value,
      startDate:startDateRef.current?.value,
      endDate:endDateRef.current?.value,
      present:presentRef.current?.checked,
      jobDesc:jobDescRef.current?.value
    }
    jobsHandler((prev) => {
      return [...prev,new_job]
    })
    jobTitleRef.current.value = ""
    startDateRef.current.value = ""
    endDateRef.current.value = ""
    presentRef.current.checked = false
    jobDescRef.current.value = ""

  }

  return (
    <React.Fragment>
    {
      jobForm.formElements.map((ins,k1) => {
        return (
          <div className="form_container">
            {
              ins.map((i,k2)=>{
                return (
                  <Input key={k1+"-"+k2} position={k1+"-"+k2} {...i} setState={setJobForm} />
                )
              })
            }
          </div>
        )
      })
    }
    <div className="form_container">
      <div className="form_element">
        <button type="button" onClick={onClickAddJob}>Add</button>
      </div>
    </div>
    </React.Fragment>
  )
}


const EnterWorkHistoryPage = () => {

  let [jobs,setJobs] = useState([])


  const onClickDeleteJobIcon = (id) => {
    let copy = [...jobs]
    copy.splice(id,1)
    setJobs(copy)
  }


  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Work history</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form">

        <div className="form_container">
          <div className="form_element form_element_checkbox">
            <label>This is my first job</label>
            <input type="checkbox" required />
          </div>
        </div>

        {jobs.map((ins,key) => {
          return <JobComponent key={key} id={key} title={ins.title} start={ins.startDate} end={ins.endDate} present={ins.present} onClickDeleteJobIcon={onClickDeleteJobIcon} />
        })}

        <JobFormComponent jobsHandler={setJobs} />

        <div className="form_container">
          <div className="form_element">
            <button type="submit">Next</button>
          </div>
        </div>

      </form>
    </React.Fragment>
  )
}

export default EnterWorkHistoryPage;
