import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#39424E',
  },
  appNameContainer: {
    width: '75%',
  },
  appName: {
    fontStyle: 'oblique',
    fontWeight: '900',
    fontSize: '30px',
    color: '#fff'
  },
  logout: {
    width: '25%'
  },
  white: {
    color: '#fff'
  }
}))