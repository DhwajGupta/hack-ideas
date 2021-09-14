import { put, takeLatest } from 'redux-saga/effects'

import { addNewChallenge, toggleUpvoteChallenge, getExistingChallenges } from '../../services/challenges'
import { getChallenges, setChallenges, addChallenge, updateChallenge, setError } from '../slices/challenges'
import { ORDER_BY } from '../../constants'

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
    const orderByField = localStorage.getItem(ORDER_BY)
    yield put(getChallenges({ page: 1, orderByField }))
  } catch (e) {
    yield put(setError((e)))
  }
}

function* updateChallengeWorker(action) {
  try {
    const { challengeId, isIncrement} = action?.payload || {}
    yield toggleUpvoteChallenge(challengeId, isIncrement)
    const orderByField = localStorage.getItem(ORDER_BY)
    yield put(getChallenges({ page: 1, orderByField }))
  } catch (e) {
    yield put(setError((e)))
  }
}

export default challengeWatcher
