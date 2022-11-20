import { Component, Host, h } from '@stencil/core';

{/* Inspired by angular */}
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      // Host, acts like a React Fragment, can be accessed by css with :host
      <Host> 
        <header>
          <h1>Pokemon Cards</h1>
        </header>

        <main>
          {/* Inspired by react-router */}
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <pokemon-link class="backbtn" text={"Home"} url={"/"} />
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}
