import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Box from '@material-ui/core/Box'
import useStyles from './ChallengeCard.styles'
import Chip from '@material-ui/core/Chip'
import Tooltip from '@material-ui/core/Tooltip'

export default function ChallengeCard(props) {
  const { challenge, handleUpvote } = props
  const {
    title,
    description,
    tags,
    upvotes,
    createdAt,
    uid
  } = challenge

  const classes = useStyles()

  const formattedDate = new Date(+createdAt?.seconds * 1000).toLocaleString()

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography variant='subtitle1' noWrap>{title} </Typography>}
        subheader={<Typography variant='body2'>{formattedDate} </Typography>}
      />
      <CardContent>
        <Tooltip title={description} placement="right" arrow>
          <Typography variant='body2' color='textSecondary' component='p' noWrap>
            {description}
          </Typography>
        </Tooltip>
        <Box className={classes.tagContainer}>
          Tags:
          {tags.map((tag) => (
            <Box component='span' m={1} key={tag}>
              <Chip key={tag} label={tag} color='primary' />
            </Box>
          ))}
        </Box>
        <Chip
          label={`${upvotes} Upvotes`}
          onDelete={() => handleUpvote(uid)}
          color="secondary"
          deleteIcon={<FavoriteIcon />}
        />
      </CardContent>
    </Card>
  )
}
