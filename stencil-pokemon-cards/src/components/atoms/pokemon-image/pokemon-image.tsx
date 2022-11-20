import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pokemon-image',
  styleUrl: 'pokemon-image.css',
  shadow: true,
})
export class PokemonImage {
  @Prop() src!: string;

  render() {
    return (
      <div class="poke-image">
        <img src={this.src} />
      </div>
    );
  }

}
