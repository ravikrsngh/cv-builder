const Input = ({properties}) => {
  if (!properties) {
    return <></>
  }
  const onClickAddInputButtonHandler = () => {
    console.log(properties["label"]);
  }


  if (properties.type == "textarea") {
    return (
      <div className="form_element">
        <label>{properties.label}{properties.required? <sup>*</sup> : null }</label>
        <textarea className="input_text" rows="8" required={properties.required}></textarea>
      </div>
    )
  }
}


export default Input;
