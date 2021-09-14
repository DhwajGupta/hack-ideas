import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

export default makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#F3F7F7',
    height: '100%',
  },
  drawerContainer: {
    overflow: 'auto',
  },
}))