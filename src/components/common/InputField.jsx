import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const InputField = (props) => {
  const {
    variant,
    margin,
    required,
    fullWidth,
    name,
    label,
    type,
    id,
    handleChange,
    autoFocus,
    multiline,
    error,
    maxLength
  } = props

  return (
    <TextField
      variant={variant}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      name={name}
      label={label}
      type={type}
      id={id}
      onChange={handleChange}
      autoFocus={autoFocus}
      multiline={multiline}
      error={!!error}
      helperText={error}
      inputProps={{ maxLength: maxLength }}
    />
  )
}

InputField.defaultProps = {
  variant: 'outlined',
  margin: 'normal',
  required: false,
  fullWidth: true,
  type: 'text',
  startAdornment: null,
  autoFocus: false,
  multiline: false,
  error: '',
  maxLength: 50
}

InputField.propTypes = {
  variant: PropTypes.string,
  margin: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  autoFocus: PropTypes.bool,
  multiline: PropTypes.bool,
  error: PropTypes.string,
  maxLength: PropTypes.number
}

export default InputField
