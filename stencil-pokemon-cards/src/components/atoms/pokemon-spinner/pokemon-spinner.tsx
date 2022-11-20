import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pokemon-spinner',
  styleUrl: 'pokemon-spinner.css',
  shadow: true,
})
export class PokemonSpinner {

  @Prop() text: string;

  render() {
    return (
      <span>{this.text || "Loading..."}</span>
    );
  }

}
