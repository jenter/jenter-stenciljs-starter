import { Component, h } from '@stencil/core'; //  Host,

@Component({
  tag: 'faux-grid',
  styleUrl: 'faux-grid.css',
  shadow: true,
})
export class FauxGrid {

  render() {
    return (
      <div class="faux-grid">
        <slot></slot>
      </div>
    );
  }

}
