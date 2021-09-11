import { all } from 'redux-saga/effects'
import auth from './auth'
import challenges from './challenges'

export default function* rootSaga() {
  yield all([
    auth(),
    challenges(),
  ])
}