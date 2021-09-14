import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'

import NewChallenge from '../../containers/NewChallenge'
import SortByFilter from '../../containers/SortByFilter'
import useStyles from './Sidemenu.styles'

const Sidemenu = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button>
            <NewChallenge />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <SortByFilter />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

export default Sidemenu
