import { Component, State, Listen, Host, h } from '@stencil/core';
import { PokemonList, ViewState } from '../../types/types';
import { getPokemonNames } from '../../utils/helpers';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  @State() allPokemon: PokemonList;
  @State() selectedPokemon: string = "pikachu";
  @State() view: ViewState;

  @Listen('pokemonSelected')
  pokemonSelectedHandler(event: CustomEvent<string>) {
    console.log('Received the event: ', event.type);
    console.log('The selected Pokemon is:', event.detail);
    this.selectedPokemon = event.detail;
  }

  async componentWillLoad() {
    this.view = "LOADING";

    await getPokemonNames(50)
      .then(response => {
        this.allPokemon = { ...this.allPokemon, results: response.results };
        this.selectedPokemon = response.results[0].name;
        this.view = "SUCCESS";
      })
      .catch(error => {
        this.view = "ERROR";
        console.error("Something went wrong!: ", error.message)
      })
  }

  selectHandler(event) {
    console.log('The selected Pokemon is:', event.currentTarget.value);
    this.selectedPokemon = event.currentTarget.value;
  }

  render() {
    return (
      <Host>
      <div class="app-home">
        {this.view === "LOADING" && <pokemon-spinner />}
        {this.view === "SUCCESS" &&
          <div>
            <pokemon-header>
              {/* notice the order! */}
              <h3 slot="subheader">Have fun!</h3>
              <h1 slot="header">Welcome to the Pokemon Cards App. You can find any pokemon here!</h1>
              <pokemon-paragraph text={"this won't be rendered on the page, unless you uncomment the slot"} />
            </pokemon-header>

            {/* option 1: inline  */}
            {!!this.allPokemon &&
              <select onChange={(event) => this.selectHandler(event)}>
                {
                  this.allPokemon.results.map(pokemon => <option value={pokemon.name}>{pokemon.name}</option>)
                }
              </select>
            }

            {/* option2: passing function */}
            {/* {!!this.allPokemon && <pokemon-select items={this.allPokemon.results} selectHandler={(event) => this.selectHandler(event)}/>} */}

            {/* option3: listening event */}
            {/* {!!this.allPokemon && <pokemon-select-event items={this.allPokemon.results} />} */}

            <pokemon-paragraph text={`You selected: ${this.selectedPokemon}`} />
          </div>
        }
        {this.view === "ERROR" && <pokemon-error />}
      </div>
        <pokemon-link text={"Go to Profile"} url={`/profile/${this.selectedPokemon}`} />
      </Host>
    );
  }
}
