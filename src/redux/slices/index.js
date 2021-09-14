import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth'
import challenges from './challenges'

const rootReducer = combineReducers({
  auth,
  challenges
})

export default rootReducer
