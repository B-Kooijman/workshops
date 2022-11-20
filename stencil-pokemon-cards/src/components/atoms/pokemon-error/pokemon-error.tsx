import { Component, h } from '@stencil/core';

@Component({
  tag: 'pokemon-error',
  styleUrl: 'pokemon-error.css',
  shadow: true,
})
export class PokemonError {

  render() {
    return (
      <span>
        Something went wrong!
      </span>
    );
  }

}
