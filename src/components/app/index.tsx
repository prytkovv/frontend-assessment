import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Wrapper } from '@components/wrapper/Wrapper'
import Routes from '../../routes/Routes'

const App = () => (
  <Router>
    <main>
      <Wrapper>
        <Routes />
      </Wrapper>
    </main>
  </Router>
)

export default App
