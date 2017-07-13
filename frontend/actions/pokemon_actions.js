export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
// import {fetchAllPokemon} from '../util/api_util';
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = poke => ({
  type: RECEIVE_SINGLE_POKEMON,
  poke
});



// async actions
export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = () => (dispatch) => {
  return APIUtil.fetchSinglePokemon()
    .then(poke => dispatch(receiveSinglePokemon(poke)));
};




// window.receiveAllPokemon = receiveAllPokemon;
