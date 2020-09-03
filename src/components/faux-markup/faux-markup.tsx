import { Component, h } from '@stencil/core';

@Component({
  tag: 'faux-markup',
  styleUrl: 'faux-markup.css',
  shadow: true,
})
export class FauxMarkup {

  render() {
    return (
      <div>
        <a>A tag</a>
        <p>P tag</p>
        <h1>H1 tag</h1>
        <div>DIV tag</div>
        <img src="https://via.placeholder.com/150" />
        <slot />
      </div>
    );
  }

}
