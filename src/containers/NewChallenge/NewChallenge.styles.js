import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogContainer: {
    // width: '60%',
    // height: '60%'
  },
  appBar: {
    position: 'relative',
  },
  form: {
    // display: 'flex',
    flexDirection: 'column',

  },
  formControl: {
    marginTop: theme.spacing(2),
    width: '100%'

  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}))