import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Link to='/'>
          <Logo>blueHike</Logo>
        </Link>
        <Navbar>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/cart'>Cart</NavLink>
        </Navbar>
      </Container>
    </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header``
const Container = styled.div``
const Logo = styled.h1``

export default Navbar