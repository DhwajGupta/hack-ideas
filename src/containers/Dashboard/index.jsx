import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useStyles from './Dashboard.styles'
import Login from '../../components/Login'
import { login } from '../../redux/slices/auth'

export default function Dashboard() {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const { loading, loggedIn } = useSelector((state) => state.auth)

  const handleSubmit = (data) => {
    dispatch(login(data))
  }

  useEffect(() => {
    if (loggedIn) history.push('/home')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, history])

  return (
    <Grid container component='main' className={`${classes.root} ${classes.image}`}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Login
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </div>

    </Grid>
  )
}