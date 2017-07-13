import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      nextState = merge({}, action.pokemon);
      return nextState;
    default:
      return state;
}};

export default pokemonReducer;
