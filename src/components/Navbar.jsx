import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import routes from '../constants/routes.json'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Link to='/'>
          <Logo>blueHike</Logo>
        </Link>
        <Navbar>
          <NavbarLink to={routes.HOME}>Home</NavbarLink>
          <NavbarLink to={routes.PRODUCTS}>Products</NavbarLink>
          <NavbarLink to={routes.CONTACT}>Contact</NavbarLink>
          <NavbarLink to='/cart'>Cart</NavbarLink>
        </Navbar>
      </Container>
    </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
background-color: ${({theme}) =>theme.colors.dark};
width: 99vw;
`
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: ${({theme}) => theme.widths.content};
margin: 0 auto;
padding: 4rem;

 @media (max-width: 768px) {
  flex-direction: column;
  gap: 4rem;
 }
`
const Logo = styled.h1`
display: flex;
color: ${({theme}) => theme.colors.primary};
font-size: 6rem;
margin-right: 40rem;


`
const Navbar = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1.5rem;
font-size: 2.4rem;

 @media (max-width: 480px) {
  gap: 0;
  width: 100%;
 }
`

const NavbarLink = styled(Link)`
padding: 0.8rem;
width: 14rem;
height: 6rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 2.2rem;
color: ${({theme}) => theme.colors.light};
transition: transform 0.1s ease-in-out;
border-radius: 23px;

&:hover {
  background-color: ${({theme}) => theme.colors.grey.dark};
}


`

export default Header