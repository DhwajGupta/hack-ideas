import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255,255,255,0.2)',
    borderLeft: '1px solid rgba(255,255,255,0.2)',
    boxShadow: '5px 5px 30px rgba(0,0,0,0.2)',
    borderRadius: '3px',
    position: 'relative',
    margin: '30vh auto',
    padding: '25px 5px'
  }
}))
