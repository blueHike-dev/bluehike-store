import React from 'react'
import { Route, Router } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../pages/Home'

const Main = () => {
  return (
    <MainWrapper>
      <Router>
        <Route pathname={HOME} Component={Home} />
      </Router>
    </MainWrapper>
  )
}

const MainWrapper = styled.main``

export default Main