import { Component, h, Prop, State } from '@stencil/core';
import { PokemonType, PokemonTypeItem } from '../../../types/types';
import { getPokemonByType } from '../../../utils/helpers';

@Component({
  tag: 'pokemon-types',
  styleUrl: 'pokemon-types.css',
  shadow: true,
})
export class PokemonTypes {

  @State() allPokemonByType: PokemonTypeItem[];
  
  /** the pokemon types */
  @Prop() types!: PokemonType[]

  async clickHandler(name) {
    await getPokemonByType(name)
      .then((result) => {
        this.allPokemonByType = result.pokemon;
      }).catch((error) => {
        console.error(`Something went wrong!: ${error.message}`)
      })
  }

  render() {
    return (
      <div>
        <h3>Types</h3>
        <div class="type_buttons">
          {this.types.map(({ type }) => {
            return (
              <button onClick={() => this.clickHandler(type.name)}>
                {type.name}
              </button>
            )
          })}
        </div>

        {!!this.allPokemonByType && <div>
          <h3>Random Pokemon by Type</h3>
          {this.allPokemonByType.splice(0, Math.round(1 + Math.random() * 10)).map(i => {
            return (
              <pokemon-link text={i.pokemon.name} url={`/profile/${i.pokemon.name}`} />
            )
          })}
        </div>
        }
      </div>
    );
  }
}
