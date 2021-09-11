import { put, takeLatest } from 'redux-saga/effects'
import { requestEmployeVerify } from '../../services/auth'
import { login, loginSuccess, loginFailure } from '../slices/auth'

function* authWatcher() {
  yield takeLatest(login.type, loginWorker)
}

function* loginWorker(action) {
  try {
    const data = action?.payload || {}
    const [result, err] = yield requestEmployeVerify(data)

    if (result) {
      yield put(loginSuccess(result))
    } else {
      throw err
    }
  } catch (e) {
    yield put(loginFailure())
  }
}

export default authWatcher
