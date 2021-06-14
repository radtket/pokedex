import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import PokeGrid from './poke-grid/PokeGrid';

const StyledMainWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const StyledMain = styled.main`
  height: calc(100% - 60px);
  padding: 24px;
  overflow: auto;
`;

const StyledHeader = styled.header`
  align-items: center;
  background-color: #e3350d;
  color: #fff;
  display: flex;
  font-size: larger;
  font-weight: bold;
  height: 60px;
  padding-left: 60px;

  a {
    cursor: pointer;
  }
`;

const Main = () => {
  return (
    <StyledMainWrapper>
      <StyledHeader>
        <Link to="/">Pokémon</Link>
      </StyledHeader>
      <StyledMain>
        <Switch>
          <Route path="/pokemon/:id" />
          <Route component={PokeGrid} path="/" />
        </Switch>
      </StyledMain>
    </StyledMainWrapper>
  );
};

export default Main;
