import React from 'react'

const FormField = (props) => {

  const {
    label,
    name,
    onBlur,
    onChange,
    value,
    touch,
    error,
    validationClassName
  } = props

  const inputAttrs = {
    autoComplete: "off",
    className: `form-control ${validationClassName}`,
    name,
    value,
    onBlur,
    onChange
  }

  return (
    <div className="form-group">
      <label>{label}</label>

      <input {...inputAttrs}/>

      {touch && !error && (
        <div className="valid-feedback">
          Looks Good!
        </div>
      )}

      {touch && error && (
        <div className="invalid-feedback">
          Invalid field 
        </div>
      )}
    </div>
  )
}

export default FormField