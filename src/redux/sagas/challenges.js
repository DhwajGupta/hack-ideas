import { put, takeLatest, select } from 'redux-saga/effects'
import { addNewChallenge, toggleUpvoteChallenge, getExistingChallenges } from '../../services/challenges'
import { getChallenges, setChallenges, addChallenge, updateChallenge, setError } from '../slices/challenges'

function* challengeWatcher() {
  yield takeLatest(getChallenges.type, getChallengesWorker)
  yield takeLatest(addChallenge.type, addChallengeWorker)
  yield takeLatest(updateChallenge.type, updateChallengeWorker)
}

function* getChallengesWorker(action) {
  try {
    const { page, orderByField } = action?.payload || {}

    const [result, err] = yield getExistingChallenges(page, orderByField)
    if (result) {
      yield put(setChallenges(result))
    } else throw new Error(err)
  } catch (e) {
    yield put(setError((e)))
  }
}

function* addChallengeWorker(action) {
  try {
    const formData = action?.payload || {}
    yield addNewChallenge(formData)
    yield put(getChallenges(1))
  } catch (e) {
    yield put(setError((e)))
  }
}

function* updateChallengeWorker(action) {
  try {
    const { challengeId, isIncrement} = action?.payload || {}
    yield toggleUpvoteChallenge(challengeId, isIncrement)
    yield put(getChallenges())
  } catch (e) {
    yield put(setError((e)))
  }
}

export default challengeWatcher
