import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  challenges: [],
  loading: true,
  error: null,
  success: null,
  orderByField: 'createdAt'
}

export const challengeSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    setOrderByField: (state, action) => ({
      ...state,
      orderByField: action.payload
    }),
    getChallenges: (state) => ({
      ...state,
      loading: true,
      error: null
    }),
    setChallenges: (state, action) => {
      return ({
        ...state,
        loading: false,
        challenges: action.payload
      })
    },
    addChallenge: (state) => ({
      ...state,
      loading: true,
    }),
    updateChallenge: (state) => ({
      ...state,
      loading: false,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload
    }),
    setSuccess: (state, action) => ({
      ...state,
      loading: false,
    }),
    resetErrorAndSuccess: (state) => ({
      ...state,

    }),
  },
})

export const { setOrderByField, getChallenges, setChallenges, addChallenge, updateChallenge, setError, setSuccess, resetErrorAndSuccess } = challengeSlice.actions

export default challengeSlice.reducer