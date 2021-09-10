import React from 'react'

const HomeContainer = React.lazy(() => import('../containers/Home'))
const Dashboard = React.lazy(() => import('../containers/Dashboard'))

const routesList = [{
  path: '/',
  component: Dashboard,
}, {
  path: '/home',
  component: HomeContainer,
  private: true,
}]

export default routesList
