import React from 'react';
import './Main.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import PokeGrid from './poke-grid/PokeGrid';

const Main = () => {
  const history = useHistory();

  return (
    <div className="pokedex">
      <div className="pokedex-header">
        <span
          className="pokedex-header-title"
          onClick={() => {
            history.push('/');
          }}
        >
          Pokémon
        </span>
      </div>
      <div className="pokedex-content">
        <Switch>
          <Route path="/pokemon/:id" />
          <Route component={PokeGrid} path="/" />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
