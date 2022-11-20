import { Component, State, Prop, Watch, Element, Host, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Pokemon, ViewState } from '../../types/types';
import { getPokemon } from '../../utils/helpers';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  @State() currentPokemon: Pokemon;
  @State() view: ViewState;
  @Prop() match: MatchResults;
  @Element() el: HTMLElement;

  @Watch('match')
  matchWatchHandler(newValue, oldValue) {
    console.log("new url: ", newValue?.url)
    console.log("old url: ", oldValue?.url)

    if (newValue?.url !== oldValue?.url) {
      this.updateView();
    }
  }

  async componentWillLoad() {
    this.updateView();
  }

  // You can also use componentShouldUpdate instead of @Watch
  // async componentShouldUpdate(newVal, oldVal, propName) {
  //   console.log("2: updated state so component should rerender")

  //   if (propName === "match") {
  //     console.log("propName that changed: ", propName)
  //     console.log("new url: ", newVal.url)
  //     console.log("old url: ", oldVal.url)

  //     if (newVal.url !== oldVal.url) {
  //       console.log("Update! ", propName)
  //       this.updateView();
  //     } else {
  //       console.log("No need to update! ", propName)
  //     }
  //   }
  // }

  async componentDidUpdate() {
    //console.log("host", this.el);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.el.style.backgroundColor = `#${randomColor}`;
  }

  async updateView() {
    this.view = "LOADING";

    await getPokemon(this.match.params.name)
      .then((response: Pokemon) => {
        console.log("1: updated state so rerender")
        this.currentPokemon = {
          ...this.currentPokemon,
          id: response.id,
          sprites: response.sprites,
          species: response.species,
          types: response.types
        };
        this.view = "SUCCESS";
      })
      .catch(error => {
        console.error("Something went wrong!: ", error.message);
        this.view = "ERROR";
      })
  }

  render() {
    return (
      <Host>
        <div class="app-profile">
          {this.view === "LOADING" && <pokemon-spinner />}
          {this.view === "SUCCESS" && <pokemon-details pokemon={this.currentPokemon} />}
          {this.view === "ERROR" && <pokemon-error />}
        </div>
      </Host>
    );
  }
}
