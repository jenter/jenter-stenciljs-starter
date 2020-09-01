import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'faux-inner',
  styleUrl: 'faux-inner.css',
  shadow: true,
})
export class FauxInner {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
