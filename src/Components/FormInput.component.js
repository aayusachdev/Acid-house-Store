import React from 'react'
import "../Styles/formInput.style.scss"

const FormInput = ({ label, handleChange, ...otherInputProps }) => {
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...otherInputProps} />
      {label ? (<label className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>)
        :
        null}

    </div>
  )
}

export default FormInput;