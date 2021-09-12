import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import AddIcon from '@material-ui/icons/Add'
import useStyles from './NewChallenge.styles'
import { useSelector, useDispatch } from 'react-redux'
import NewChallengeForm from '../../components/NewChallengeForm.jsx'
import { addChallenge } from '../../redux/slices/challenges'
import { toast } from 'react-toastify'

const initialFormValues = {
  title: '',
  description: '',
  tags: [],
}

const NewChallenge = () => {
  const classes = useStyles()
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialFormValues)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.challenges)
  const { employeeId } = useSelector((state) => state.auth)

  const handleClickOpen = () => {
    setOpenModal(true)
  }
  const handleClose = () => {
    setOpenModal(false)
  }

  const handleValidateData = () => {
    const { title, description } = formData
    const validationErros = {}

    if (!title) {
      validationErros.title = 'Title required.'
    } else if (title.length < 6) {
      validationErros.title = 'Title should be of minimum 6 characters.'
    }

    if (!description) {
      validationErros.description = 'Description required.'
    } else if (description.length < 15) {
      validationErros.description = 'Description should be of minimum 15 characters.'
    }

    return validationErros
  }

  const handleSave = async () => {
    const validationErrors = handleValidateData()

    if (Object.keys(validationErrors).length) {
      return setErrors(validationErrors)
    }

    const updatedFormData = {
      ...formData,
      createdBy: employeeId,
      tags: formData.tags.length ? formData.tags : ['Other']
    }
    dispatch(addChallenge(updatedFormData))
  }

  const handleFormDataChange = (e) => {
    e.preventDefault()
    const { target: { id, value, name } } = e

    if (name === 'tags') {
      if (value.length > 3) toast.info('Maximum 3 tags are allowed.')
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.slice(0, 3)
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value.trim()
      }))
    }

    if (errors[id || name]?.length) {
      setErrors((prev) => ({
        ...prev,
        [id || name]: ''
      }))
    }
  }

  useEffect(() => {
    if (!loading && openModal) {
      setFormData(initialFormValues)
      handleClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <div>
      <Button
        variant='outlined'
        color='primary'
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        New Challenge
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        onClose={handleClose}
        open={openModal}>

        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              New Challenge
            </Typography>
          </Toolbar>
        </AppBar>

        <DialogContent>
          <NewChallengeForm
            classes={classes}
            formData={formData}
            errors={errors}
            handleChange={handleFormDataChange}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus color='inherit' onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default NewChallenge