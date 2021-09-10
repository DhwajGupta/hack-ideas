import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Routes from './routes'
import Loader from './components/Loader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <Routes />
        <ToastContainer />
      </Provider>
    </Suspense>
  )
}

export default App
