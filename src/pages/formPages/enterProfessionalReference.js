import './formPages.css';

import React,{useState,useRef} from 'react';
import deleteicon from './../../assets/img/icons/delete.png'
import {Link} from 'react-router-dom';
import Input from './../../components/formComponents/inputs'


const ProfRefComponent = ({id,referee,email,number,onClickDeleteProfessionalReferenceIcon}) => {
  return (
    <div className="info_details_container">
      <div className="">
        <h6>{referee}</h6>
        <span>{email}, {number}</span>
      </div>
      <button type="button" className="info_details_del_btn" onClick={() => onClickDeleteProfessionalReferenceIcon(id)}><img src={deleteicon} /></button>
    </div>
  )
}

const ProfRefFormComponent = ({profRefHandler}) => {
  let refereeRef = useRef(null)
  let emailRef = useRef(null)
  let numberRef = useRef(null)

  const [profRefForm,setProfRefForm] = useState({
    formElements:[
      [
        {
          type:"text",
          label:"Referee",
          required:false,
          removeable:false,
          removedState:false
        },
        {
          type:"text",
          label:"Contact Email",
          required:false,
          removeable:true,
          removedState:false
        },
        {
          type:"text",
          label:"Contact Phone",
          required:false,
          removeable:true,
          removedState:false
        },
      ],
      [
        {
          type:"checkbox",
          label:"Available on Request?",
          required:false,
          removeable:true,
          removedState:false
        }
      ],
    ]
  })

  const onClickAddProfRef = () => {
    let new_profref = {
      referee:refereeRef.current.value,
      email:emailRef.current.value,
      number:numberRef.current.value,
    }
    profRefHandler((prev) => {
      return [...prev,new_profref]
    })
    refereeRef.current.value = ""
    emailRef.current.value = ""
    numberRef.current.value = ""

  }

  return (
    <React.Fragment>
    {
      profRefForm.formElements.map((ins,k1) => {
        return (
          <div className="form_container">
            {
              ins.map((i,k2)=>{
                return (
                  <Input key={k1+"-"+k2} position={k1+"-"+k2} {...i} setState={setProfRefForm} />
                )
              })
            }
          </div>
        )
      })
    }
    <div className="form_container">
      <div className="form_element">
        <button type="button" onClick={onClickAddProfRef}>Add</button>
      </div>
    </div>

    </React.Fragment>
  )
}


const EnterProfessionalReferencePage = () => {

  let [professionalReference,setProfessionalReference] = useState([])

  const onClickDeleteProfessionalReferenceIcon = (id) => {
    let copy = [...professionalReference]
    copy.splice(id,1)
    setProfessionalReference(copy)
  }

  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Professional Reference</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form">

        {professionalReference.map((ins,key) => {
          return <ProfRefComponent key={key} id={key} referee={ins.referee} email={ins.email} number={ins.number} onClickDeleteProfessionalReferenceIcon={onClickDeleteProfessionalReferenceIcon} />
        })}

        <ProfRefFormComponent profRefHandler={setProfessionalReference} />

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
