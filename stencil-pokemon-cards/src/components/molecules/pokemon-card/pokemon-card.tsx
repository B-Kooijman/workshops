import { Component, h, Prop } from '@stencil/core';
import { Pokemon } from '../../../types/types';

@Component({
  tag: 'pokemon-card',
  styleUrl: 'pokemon-card.css',
  shadow: true,
})
export class PokemonCard {
  @Prop() pokemon!: Pokemon;

  render() {
    return (
      <div>
        <pokemon-image src={this.pokemon.sprites.other.dream_world.front_default} />
        <h3>Name</h3>
        <pokemon-paragraph text={this.pokemon.species.name} />
        <div>
          <pokemon-types types={this.pokemon.types}/>
        </div>
      </div>
    );
  }
}
