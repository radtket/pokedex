import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPokeCard = styled(Link)`
  padding-top: 24px;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(3, 27, 78, 0.1);
  transition: box-shadow 0.4s ease-in-out;

  &:hover {
    box-shadow: 0 2px 20px rgba(3, 27, 78, 0.4);
    cursor: pointer;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  dl {
    height: 60px;
    margin: 0;
    padding: 6px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  dt {
    height: 20px;
    padding: 0 6px;
    border-radius: 10px;
    background-color: #90caf9;
    font-family: 'Open Sans Condensed', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  dd {
    margin: 0;
    font-size: 18px;
    font-family: 'Open Sans Condensed', sans-serif;
    text-transform: uppercase;
  }
`;

const PokeCard = ({ id, name }) => {
  return (
    <StyledPokeCard to={`/pokemon/${id}`}>
      <figure className="pokemon-card-image">
        <img
          alt={`Pokémon: ${name}`}
          height="180px"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        />
      </figure>
      <dl>
        <dt>#{id}</dt>
        <dd>{name}</dd>
      </dl>
    </StyledPokeCard>
  );
};

export default PokeCard;
