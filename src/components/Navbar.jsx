import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Link to='/'>
          <Logo>blueHike</Logo>
        </Link>
        <NavbarLink>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='/contacts'>Contact</Link>
          <Link to='/cart'>Cart</Link>
        </NavbarLink>
      </Container>
    </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header``
const Container = styled.div``
const Logo = styled.h1``
const NavbarLink = styled.nav``

export default Navbar