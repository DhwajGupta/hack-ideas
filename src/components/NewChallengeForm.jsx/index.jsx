import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputField from '../../components/common/InputField'
import validTags from '../../data/validTags'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const NewChallengeForm = (props) => {
  const { handleChange, formData, classes, errors } = props

  return (
    <form className={classes.form} noValidate>
      <FormControl className={classes.formControl}>
        <InputField
          id='title'
          name='title'
          label='Title'
          fullWidth
          value={formData.title}
          handleChange={handleChange}
          autoFocus
          error={errors.title}
          maxLength={25}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputField
          id='description'
          name='description'
          label='Description'
          fullWidth
          value={formData.description}
          handleChange={handleChange}
          multiline
          error={errors.description}
          maxLength={50}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id='tags'>Tags</InputLabel>
        <Select
          labelId='tags'
          id='tags'
          name='tags'
          multiple
          variant='outlined'
          value={formData.tags}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {validTags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              <Checkbox checked={formData.tags.indexOf(tag) > -1} />
              <ListItemText primary={tag} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  )
}

export default NewChallengeForm
