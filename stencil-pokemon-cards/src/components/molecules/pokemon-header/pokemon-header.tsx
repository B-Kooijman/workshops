import { Component, h } from '@stencil/core';

@Component({
  tag: 'pokemon-header',
  styleUrl: 'pokemon-header.css',
  shadow: true,
})
export class PokemonHeader {
  render() {
    return (
      <div>
        <slot name="header"/>
        <slot name="subheader"/>
        {/* <slot /> */}
      </div>
    );
  }
}