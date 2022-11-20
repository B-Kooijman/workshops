import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pokemon-link',
  styleUrl: 'pokemon-link.css',
  shadow: true,
})
export class PokemonButton {
  @Prop() text!: string;
  @Prop() url!: string;

  render() {
    return (
      <stencil-route-link url={this.url}>
        <button>
          {this.text}
        </button>
      </stencil-route-link>
    )
  }
}
