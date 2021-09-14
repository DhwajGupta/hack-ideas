import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'

const Loader = () => {
  return (
    <Container>
      <CircularProgress color='secondary' />
    </Container>
  )
}

export default Loader
