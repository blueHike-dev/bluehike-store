import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../constants/routes.json";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../state/actions";
import Button from "./elements/Button";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const dipatch = useDispatch();

  const sumQuantity = () => {
    if (!Array.isArray(cart)) {
      return 0; // or handle the case where cart is not an array
    }
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
  };

  // const sumQuantity = () => {
  //   return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
  // };
  return (
    <HeaderWrapper>
      <Container>
        <Link to="/">
          <Logo>blueHike</Logo>
        </Link>
        <Navbar>
          <NavbarLink to={routes.HOME}>Home</NavbarLink>
          <NavbarLink to={routes.PRODUCTS}>Products</NavbarLink>
          <NavbarLink to={routes.CONTACT}>Contact</NavbarLink>
          <ButtonContainer onClick={() => dipatch(openCart())}>
            <Button content={<FaShoppingCart />} shape="round" />
            {sumQuantity() > 0 ? <Quantity>{sumQuantity()}</Quantity> : ""}
          </ButtonContainer>
        </Navbar>
      </Container>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
  width: 99vw;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
const Logo = styled.h1`
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
  margin-right: 40rem;
`;
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
`;

const NavbarLink = styled(Link)`
  padding: 0.8rem;
  width: 14rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.1s ease-in-out;
  border-radius: 23px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey.dark};
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`;

const Quantity = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: bold;
`;

export default Header;
