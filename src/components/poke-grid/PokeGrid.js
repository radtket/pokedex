import React, { useState, useCallback, useEffect, useRef } from 'react';
import PokeCard from './PokeCard';
import getPaginatedPokemonList from '../../api/Pokedex';
import './PokeGrid.css';
import Spinner from '../common/Spinner';

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

  const intersectionObserverCallback = entries => {
    const [observedElement] = entries;
    const { y } = observedElement.boundingClientRect;
    if (prevYRef.current > y) {
      fetchMorePokemon();
    }
    prevYRef.current = y;
  };

  const observer = useRef(
    new IntersectionObserver(intersectionObserverCallback, { threshold: 0.1 })
  );

  const observedElementRef = useRef(null);

  useEffect(() => {
    const currentObserver = observer.current;
    const currentObservedElementRef =
      observedElementRef && observedElementRef.current;

    if (currentObservedElementRef) {
      currentObserver.observe(currentObservedElementRef);
    }

    return () => {
      if (currentObservedElementRef) {
        currentObserver.unobserve(currentObservedElementRef);
      }
    };
  }, []);

  return (
    <div className="pokedex-grid">
      {pokemonList.map(pokemon => (
        <PokeCard key={pokemon.name} {...pokemon} />
      ))}
      <div ref={observedElementRef} className="pokedex-grid-loader">
        {fetching && <Spinner />}
      </div>
    </div>
  );
};

export default PokeGrid;
