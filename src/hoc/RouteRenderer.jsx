import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import { EMPLOYEE_ID_SESSION_KEY } from '../constants'

const RouteRenderer = (props) => {
  const { private: isPrivateRoute } = props

  const isUserLoggedIn = !!sessionStorage.getItem(EMPLOYEE_ID_SESSION_KEY)

  if (isPrivateRoute && !isUserLoggedIn) {
    return <Redirect to='/' />
  }
  return <Route exact {...props} />
}

export default RouteRenderer

