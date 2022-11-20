import { Component, Prop, h } from '@stencil/core';
import { PokemonListItem } from '../../../types/types';

@Component({
  tag: 'pokemon-select',
  styleUrl: 'pokemon-select.css',
  shadow: true,
})
export class PokemonSelect {

  @Prop() items!: PokemonListItem[]
  @Prop() selectHandler!: (event: UIEvent) => void

  render() {
    return (
      <select onChange={(event: UIEvent) => this.selectHandler(event)}>
      {
        this.items.map(pokemon => <option value={pokemon.name}>{pokemon.name}</option>)
      }
    </select>
    );
  }

}
