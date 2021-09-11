import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { InputField, PasswordInput } from '../common'
import useStyles from './Login.styles'

const initialLoginState = {
  employeeId: '',
  password: '',
}

const Login = (props) => {
  const { loading, handleSubmit } = props
  const classes = useStyles()
  const [loginFormData, setLoginFormData] = useState(initialLoginState)
  const [errors, setErrors] = useState(initialLoginState)

  const handleChangeLoginData = (e) => {
    const { target: { id, value } } = e
    setLoginFormData(prev => ({
      ...prev,
      [id]: value,
    }))

    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: ''
      }))
    }
  }


  const handleSubmitForm = (e) => {
    e.preventDefault()
    const { employeeId, password } = loginFormData

    if (!employeeId || !password) {
      return setErrors({
        employeeId: !employeeId ? 'EmployeeID required.' : '',
        password: !password ? 'Password required.' : '',
      })
    } else setErrors(initialLoginState)

  handleSubmit(loginFormData)
  }

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmitForm}
      noValidate
    >
      <InputField
        id='employeeId'
        name='employeeId'
        label='Employee ID'
        value={loginFormData.employeeId}
        handleChange={handleChangeLoginData}
        error={errors.employeeId}
        maxLength={15}
      />
      <PasswordInput
        id='password'
        name='password'
        label='Password'
        type='password'
        value={loginFormData.password}
        handleChange={handleChangeLoginData}
        error={errors.password}
        maxLength={15}
      />
      <Typography align='center'>
        <Button
          type='submit'
          fullWidth
          disabled={loading}
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          Sign In
        </Button>
      </Typography>
    </form>
  )
}

export default Login
