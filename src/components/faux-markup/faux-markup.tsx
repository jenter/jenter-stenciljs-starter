import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'faux-markup',
  styleUrl: 'faux-markup.css',
  shadow: true,
})
export class FauxMarkup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
