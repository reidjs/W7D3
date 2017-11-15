import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let nextState = action.pokemon;
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;
