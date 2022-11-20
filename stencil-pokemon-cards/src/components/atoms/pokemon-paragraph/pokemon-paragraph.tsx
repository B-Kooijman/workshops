import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pokemon-paragraph',
  styleUrl: 'pokemon-paragraph.css',
  shadow: true,
})
export class PokemonParagraph {
  @Prop() text: string;

  render() {
    return (
      <p>
        {this.text}
      </p>
    );
  }

}
