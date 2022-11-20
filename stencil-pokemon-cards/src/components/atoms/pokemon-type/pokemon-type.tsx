import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pokemon-type',
  styleUrl: 'pokemon-type.css',
  shadow: true,
})
export class PokemonType {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
