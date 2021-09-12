import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './SortByFilter.styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { setOrderByField } from '../../redux/slices/challenges'

export default function ControlledOpenSelect() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { orderByField } = useSelector(state => state.challenges)
  const [open, setOpen] = React.useState(false)

  const handleChange = (event) => {
    const { target: { value } } = event
    dispatch(setOrderByField(value))
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Sort By
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          labelId='orderByField-label'
          id='orderByField'
          open={open}
          fullWidth
          onClose={handleClose}
          onOpen={handleOpen}
          value={orderByField}
          onChange={handleChange}
        >
          <MenuItem value='createdAt'> Creation Date</MenuItem>
          <MenuItem value='upvotes'>Upvote Count</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
