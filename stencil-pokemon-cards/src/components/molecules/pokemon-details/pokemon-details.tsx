import { Component, Prop, h } from '@stencil/core';
import { Pokemon } from '../../../types/types';

@Component({
  tag: 'pokemon-details',
  styleUrl: 'pokemon-details.css',
  shadow: false,
})
export class PokemonDetails {

  @Prop() pokemon: Pokemon;

  render() {
    return (
      <div class="poke-details">
          <pokemon-card pokemon={this.pokemon}/>
      </div>
    );
  }
}