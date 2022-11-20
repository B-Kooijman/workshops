import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { PokemonListItem } from '../../../types/types';

@Component({
  tag: 'pokemon-select-event',
  styleUrl: 'pokemon-select-event.css',
  shadow: true,
})
export class PokemonSelect {

  @Prop() items!: PokemonListItem[]
  @Event() pokemonSelected: EventEmitter<any>;

  selectHandler(event) {
    console.log("totalEvent", event)
    this.pokemonSelected.emit(event.currentTarget.value);
  }

  render() {
    return (
      <select onChange={(event) => this.selectHandler(event)}>
      {
        this.items.map(pokemon => <option value={pokemon.name}>{pokemon.name}</option>)
      }
    </select>
    );
  }

}
