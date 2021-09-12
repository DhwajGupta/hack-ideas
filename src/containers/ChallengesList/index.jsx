import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './ChallengesList.styles'
import ChallengeCard from '../../components/ChallengeCard'
import SkeletonCard from '../../components/common/Skeleton'
import Grid from '@material-ui/core/Grid'
import { getChallenges, updateChallenge } from '../../redux/slices/challenges'

const ChallengesList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { challenges, loading, page, orderByField } = useSelector((state) => state.challenges)

  const handleUpvote = (challengeId) => {
    dispatch(updateChallenge({
      challengeId: challengeId,
      isIncrement: true,
    }))

  }

  useEffect(() => {
    const fetchChallenges = async () => {
      dispatch(getChallenges({ page, orderByField }))
    }

    fetchChallenges()
  }, [dispatch, orderByField, page])

  return (
    <div className={classes.root}>
      {!loading
        ?
        <Grid container spacing={3}>
          {challenges && challenges.map((challenge) => (
            <Grid item xs={4} key={challenge.uid}>
              <ChallengeCard challenge={challenge} handleUpvote={handleUpvote} />
            </Grid>
          ))}
        </Grid>
        :
        <Grid container spacing={3}>
          {[...'12345678'].map((i) => (
            <Grid item xs={4} key={i}>
              <SkeletonCard />
            </Grid>
          ))}
        </Grid>
      }
    </div>
  )
}

export default ChallengesList
