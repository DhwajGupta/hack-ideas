import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import useStyles from './AppHeader.styles'
import { Typography } from '@material-ui/core'

const AppHeader = (props) => {
  const { onLogout } = props
  const classes = useStyles()

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography align='left' className={classes.appNameContainer}>
          <Button href='/' className={classes.appName}>
            Hack Ideas
          </Button>
        </Typography>
        <Typography align='right' className={classes.logout}>
          <Button onClick={onLogout} className={classes.white}>
            Logout
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
