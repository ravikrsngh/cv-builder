const Input = (properties) => {

  const onClickAddInputButtonHandler = () => {
    console.log(properties["label"]);
  }

  const removeThisField = () => {
    properties.setState((prev) => {
      let obj = prev.formElements;
      let pos_arr = properties.position.split("-");
      obj[pos_arr[0]][pos_arr[1]].removedState = true
      return {...prev, formElements:obj}
    })
  }
  const addThisField = () => {
    properties.setState((prev) => {
      let obj = prev.formElements;
      let pos_arr = properties.position.split("-");
      obj[pos_arr[0]][pos_arr[1]].removedState = false
      return {...prev, formElements:obj}
    })
  }

  const isRemoveable = () => {
    if (properties.removeable) {
      return (
        <span onClick={removeThisField}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1L7 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      )
    }
  }

  if (properties.removedState) {
    return (
      <div className="form_element form_element_centered">
        <button type="button" onClick={addThisField}>Add {properties.label}</button>
      </div>
    )
  }

  if (properties.type == "textarea") {
    return (
      <div className="form_element">
        <label>
          {properties.label}
          {properties.required? <sup>*</sup> : null }
          {isRemoveable()}
        </label>
        <textarea ref={properties.ref} className="input_text" rows="8" required={properties.required}></textarea>
      </div>
    )
  } else if (["text","date","email","password","number","month"].includes(properties.type)) {
    return (
      <div className="form_element">
        <label>{properties.label}{properties.required? <sup>*</sup> : null }{isRemoveable()}</label>
        <input ref={properties.ref} type={properties.type} className="input_text" required={properties.required} />
      </div>
    )
  } else if (properties.type == "checkbox") {
    return (
      <div className="form_element form_element_checkbox">
        <label>{properties.label}{properties.required? <sup>*</sup> : null }{isRemoveable()}</label>
        <input ref={properties.ref} type={properties.type} className="input_text" required={properties.required} />
      </div>
    )
  }
}


export default Input;
