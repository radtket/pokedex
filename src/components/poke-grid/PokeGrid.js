import React, { useState, useCallback, useEffect, useRef } from 'react';

import styled from 'styled-components';

import PokeCard from './PokeCard';
import getPaginatedPokemonList from '../../api/Pokedex';
import Spinner from '../common/Spinner';

const StyledPokeGrid = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

const StyledPokeGridLoaderWrap = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LIMIT = 40;

const PokeGrid = () => {
  const [fetching, setFetching] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  const getPokemonList = useCallback(async o => {
    setFetching(true);
    const response = await getPaginatedPokemonList(o, LIMIT);
    setPokemonList(prevList => [...prevList, ...response]);
    setFetching(false);
  }, []);

  const fetchMorePokemon = () => {
    setOffset(prev => prev + LIMIT);
  };

  useEffect(() => {
    getPokemonList(offset);
  }, [offset, getPokemonList]);

  const prevYRef = useRef(0);

  const OBSERVER = useRef(
    new IntersectionObserver(
      entries => {
        const [observedElement] = entries;
        const { y } = observedElement.boundingClientRect;
        if (prevYRef.current > y) {
          fetchMorePokemon();
        }
        prevYRef.current = y;
      },
      { threshold: 0.1 }
    )
  );

  const OBSERVED_ELEMENT_REF = useRef(null);

  useEffect(() => {
    const CURRENT_OBSERVER = OBSERVER && OBSERVER.current;

    const CURRENT_OBSERVED_ELEMENT_REF =
      OBSERVED_ELEMENT_REF && OBSERVED_ELEMENT_REF.current;

    if (CURRENT_OBSERVED_ELEMENT_REF) {
      CURRENT_OBSERVER.observe(CURRENT_OBSERVED_ELEMENT_REF);
    }

    return () => {
      if (CURRENT_OBSERVED_ELEMENT_REF) {
        CURRENT_OBSERVER.unobserve(CURRENT_OBSERVED_ELEMENT_REF);
      }
    };
  }, []);

  return (
    <StyledPokeGrid>
      {pokemonList.map(pokemon => (
        <PokeCard key={pokemon.name} {...pokemon} />
      ))}
      <StyledPokeGridLoaderWrap
        ref={OBSERVED_ELEMENT_REF}
        className="pokedex-grid-loader"
      >
        {fetching && <Spinner />}
      </StyledPokeGridLoaderWrap>
    </StyledPokeGrid>
  );
};

export default PokeGrid;
