import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home";
import routes from "../constants/routes.json";
import Products from "../pages/Products";
import Contacts from "../pages/Contacts";

const Main = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route exact path={routes.HOME} element={<Home />} />
        <Route exact path={routes.PRODUCTS} element={<Products />} />
        <Route exact path={routes.CONTACT} element={<Contacts />} />
      </Routes>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;
`;

export default Main;
