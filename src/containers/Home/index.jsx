import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import useStyles from './Home.styles'
import ChallengesList from '../ChallengesList'
import Sidemenu from '../../components/Sidemenu'
import AppHeader from '../../components/AppHeader'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/auth'
import { toast } from 'react-toastify'
import { EMPLOYEE_ID_SESSION_KEY } from '../../constants'

export default function ClippedDrawer() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { loggedIn } = useSelector((state) => state.auth)
  const history = useHistory()
  const handleLogout = () => {
    dispatch(logout())
    sessionStorage.removeItem(EMPLOYEE_ID_SESSION_KEY)
  }

  useEffect(() => {
    if(!loggedIn) {
      toast.success('Logout successfull.')
      history.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader onLogout={handleLogout} />
      <Sidemenu />
      <main className={classes.content}>
        <Toolbar />
        <ChallengesList />
      </main>
    </div>
  )
}
