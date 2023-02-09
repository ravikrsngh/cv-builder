import { useState, useContext, useEffect } from 'react';
import dropdown_arrow from './../../assets/img/icons/droppdown_arrow.png';

const SingleInputFilter = ({className,label,type}) => {
  return  (
    <div className={className}>
      <label>{label}</label>
      <input className="input" type={type} />
    </div>
  )

}

//DropdownFilter Options have 2 keys --> icon and value
const DropdownFilterOptions = (props) => {

  const selectThisOption = () => {
    props.closeDropDown(false)
  }

  return (
    <div className="filter_options" onClick={selectThisOption}>
      {props.icon? <img src={props.icon} /> : null}
      <p>{props.name}</p>
    </div>
  )
}


const DropdownFilter = ({className, label, filterOptions}) => {

  const [currentValue,setCurrentValue] = useState(filterOptions[0].value)
  const [dropdownDisplay, setDropdownDisplay] = useState(false)

  return (
    <div className={className}>
      <label>{label}</label>
      <div className="input"><span>CV Review</span><img className="dropdown_arrow" src={dropdown_arrow} onClick={()=> setDropdownDisplay(!dropdownDisplay)}/></div>
      <div className="filter_option_container" style={{display:`${dropdownDisplay? "block":"none"}`}}>
        {
          filterOptions.map((ins,key) => {
              return (
                <DropdownFilterOptions key={key} icon={ins.icon? ins.icon:null} name={ins.name} closeDropDown={setDropdownDisplay} />
              )
          })
        }
      </div>
    </div>
  )

}


const SearchableDropdownFilter = ({className, label, filterOptions,placeholder}) => {

  const [currentValue,setCurrentValue] = useState(null)
  const [finalFilterOptions,setFinalFilterOptions] = useState(filterOptions)
  const [dropdownDisplay, setDropdownDisplay] = useState(false)

  return (
    <div className={className}>
      <label>{label}</label>
      <div className="input"><span>Ravi</span><img className="dropdown_arrow" src={dropdown_arrow} onClick={()=> setDropdownDisplay(!dropdownDisplay)}/></div>
      <div className="filter_option_container" style={{display:`${dropdownDisplay? "block":"none"}`}}>
        <div className="dropdown_filter_search">
          <input placeholder={placeholder} />
        </div>
        {
          filterOptions.map((ins,key) => {
              return (
                <DropdownFilterOptions key={key} icon={ins.icon? ins.icon:null} name={ins.name} closeDropDown={setDropdownDisplay} />
              )
          })
        }
      </div>
    </div>
  )

}


export {
  SingleInputFilter,
  DropdownFilter,
  SearchableDropdownFilter
}
