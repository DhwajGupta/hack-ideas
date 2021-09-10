import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RouteRenderer from '../hoc/RouteRenderer'
import routes from './routesList'

const CustomRoutes = () => (
  <Switch>
    {routes.map((route) => (
      <Route
        path={route.path}
        key={route.path}
        exact
        render={() => RouteRenderer(route)}
      />
    ))}
  </Switch>
)

export default CustomRoutes
