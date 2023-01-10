import './formPages.css';
import dropdownicon from './../../assets/img/icons/dropdown_icon.png';
import deleteicon from './../../assets/img/icons/delete.png'
import hobbyicon from './../../assets/img/dummy/hooby_dummy_icon.png';
import Input from './../../components/formComponents/inputs'
import React, {useState,useRef} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';



const HobbyComponent = ({id,icon,value,onClickDeleteHobbyIcon}) => {
  return (
    <div className="form_container">
      <div className="hobby_form_element">
        <div className="hobby_icon_container"> <img src={icon} /> </div>
        <input type="text" value={value} className="input_text" readOnly />
        <button type="button" className="delete_hobby_btn" onClick={() => onClickDeleteHobbyIcon(id)}><img src={deleteicon} /></button>
      </div>
    </div>
  )
}

const HobbyFormComponent = ({hobbiesHandler}) => {

  const hobbyRef = useRef(null)

  const onClickAddNewHobby = () => {
    let new_hobby = {icon:"",value:hobbyRef.current.value}
    hobbiesHandler((prev) => {
      return [...prev,new_hobby]
    })
    hobbyRef.current.value=""
  }

  return (
    <React.Fragment>
    <div className="form_container">
      <div className="hobby_form_element">
        <div className="hobby_icon_container"> <img src={hobbyicon} /> </div>
        <input type="text" className="input_text" ref={hobbyRef} />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <button type="button" onClick={onClickAddNewHobby}>Add</button>
      </div>
    </div>
    </React.Fragment>
  )
}

const AdditionalDetailsFormComponent = (props) => {

  let [hobbies,setHobbies] = useState([])

  const onClickDeleteHobbyIcon = (id) => {
    let copy = [...hobbies]
    copy.splice(id,1)
    setHobbies(copy)
  }

  if (!props.display) {
    return
  }
  return (
    <React.Fragment>

    <div className="form_container">
      <div className="form_element">
        <label>Professional Title</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>Address Line 1</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>Address Line 2</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>Country</label>
        <input type="text" className="input_text" />
      </div>
      <div className="form_element">
        <label>State</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>City</label>
        <input type="text" className="input_text" />
      </div>
      <div className="form_element">
        <label>Zip Code</label>
        <input type="text" className="input_text" />
      </div>
    </div>
    <div className="form_container">
      <div className="form_element">
        <label>Hobby</label>
      </div>
    </div>
    {hobbies.map((ins,key) => {
      return <HobbyComponent key={key} id={key} icon={hobbyicon} value={ins.value} onClickDeleteHobbyIcon={onClickDeleteHobbyIcon} />
    })}
    <HobbyFormComponent hobbiesHandler={setHobbies} />

    </React.Fragment>
  )
}

const EnterPersonalDetailsPage = () => {

  const [personalDetailsForm,setPersonalDetailsForm] = useState({
    formElements:[
      [
        {
          type:"textarea",
          label:"About us",
          required:true,
          removeable:false,
          removedState:false
        }
      ],
      [
        {
          type:"text",
          label:"First Name",
          required:true,
          removeable:false,
          removedState:false
        },
        {
          type:"text",
          label:"Last Name",
          required:true,
          removeable:false,
          removedState:false
        }
      ],
      [
        {
          type:"email",
          label:"Email",
          required:true,
          removeable:false,
          removedState:false
        },
        {
          type:"text",
          label:"Phone Number",
          required:true,
          removeable:false,
          removedState:false
        }
      ]
    ]
  })

  const {setPersonalDetailsFormStatus} = useOutletContext()

  const [additionalFormDisplay, setAdditionalFormDisplay] = useState(true)

  const navigate = useNavigate()

  const onClickAdditionalFormDropdown = () => {
    if (additionalFormDisplay) {
      setAdditionalFormDisplay(false)
    } else {
      setAdditionalFormDisplay(true)
    }
  }

  const onSubmitPersonalDetailsForm = () => {
    setPersonalDetailsFormStatus(true)
    navigate('/enter-your-details/work-history')
  }

  return (
    <React.Fragment>
      <div className="form_details_container_header">
        <h2>Personal Details</h2>
        <Link to="#">View Guide</Link>
        <p>Note :- Please note, fields that have a check box against it (check) will not display on the CV unless the check box is selected.</p>
      </div>
      <form className="form_details personal_details_form" onSubmit={onSubmitPersonalDetailsForm}>
        {
          personalDetailsForm['formElements'].map((ins) => {
            console.log(ins);
            return (
              <div className="form_container">
                {
                  ins.map((i)=>{
                    console.log(i);
                    return (
                      <Input properties={i} />
                    )
                  })
                }
              </div>
            )
          })
        }
        <div className="form_container">
          <Input type="textarea" label="About you" required={true} />
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
        <div className="form_collapse_container">
          <div className="form_collapse_container_header">
            <h3>Additional Details</h3>
            <button type="button" onClick={onClickAdditionalFormDropdown}><img src={dropdownicon} /></button>
          </div>
          <AdditionalDetailsFormComponent display={additionalFormDisplay} />
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
