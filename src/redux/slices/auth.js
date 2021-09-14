import { createSlice } from '@reduxjs/toolkit'

import { EMPLOYEE_ID_SESSION_KEY } from '../../constants'

const initialState = {
  loggedIn: !!sessionStorage.getItem(EMPLOYEE_ID_SESSION_KEY),
  employeeId: sessionStorage.getItem(EMPLOYEE_ID_SESSION_KEY),
  loading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => ({
      ...state,
      loading: true
    }),
    loginSuccess: (state, action) => ({
      ...state,
      loading: false,
      employeeId: action.payload,
      loggedIn: true
    }),
    loginFailure: (state, action) => ({
      ...state,
      loading: false,
    }),
    logout: (state) => ({
      ...state,
      employeeId: null,
      loggedIn: false
    }),
  },
})

export const { login, loginSuccess, loginFailure, logout } = authSlice.actions

export default authSlice.reducer