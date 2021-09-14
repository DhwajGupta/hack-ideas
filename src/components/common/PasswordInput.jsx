import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  helperText: {
    color: '#f44336'
  }
}));

const PasswordInput = (props) => {
  const {
    fullWidth,
    name,
    label,
    id,
    handleChange,
    error,
    maxLength
  } = props

  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const EndAdornment = () => (
    <InputAdornment position='end'>
      <IconButton
        aria-label='toggle password visibility'
        onClick={handleClickShowPassword}
        edge='end'
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  )

  return (
    <FormControl className={classes.root} variant='outlined'>
      <InputLabel htmlFor={`${id}-password`}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        name={name}
        type={showPassword ? 'text' : 'password'}
        onChange={handleChange}
        fullWidth={fullWidth}
        labelWidth={70}
        endAdornment={<EndAdornment />}
        error={!!error}
        inputProps={{ maxLength: maxLength }}
      />
      <FormHelperText className={classes.helperText}>{error}</FormHelperText>
    </FormControl>
  );
}

PasswordInput.defaultProps = {
  fullWidth: true,
  autoFocus: false,
  multiline: false,
  error: '',
  maxLength: 15
}

PasswordInput.propTypes = {
  fullWidth: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  maxLength: PropTypes.number
}

export default PasswordInput
