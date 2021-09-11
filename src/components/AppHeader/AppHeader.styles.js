import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#fff'
  },
  toolbar: {
    color: '#000'
  },
  appNameContainer: {
    width: '75%',
  },
  appName: {
    fontStyle: 'oblique',
    fontWeight: '900',
    fontSize: '30px',
  },
  logout: {
    width: '25%'
  }
}))