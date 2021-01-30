import axios from 'axios';
import { GET_PAGINATED_POKEMONS_URL } from './uri';

const getPaginatedPokemonList = (offset, limit) =>
  axios
    .get(GET_PAGINATED_POKEMONS_URL(offset, limit))
    .then(({ data }) =>
      data.results.map(i => ({
        name: i.name,
        id: i.url.substring(34, i.url.length - 1),
      }))
    )
    .catch(e => {
      console.error('Error occured while fetching list of pokemons: ', e);
      return [];
    });

export default getPaginatedPokemonList;
