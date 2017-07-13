import React from 'react';
import merge from 'lodash/merge';
import { requestAllPokemon } from "../../actions/pokemon_actions";
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component {
  componentDidMount() {
      this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    return (
    <ul>
  {pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
    </ul>
    );
  }
}

export default PokemonIndex;
