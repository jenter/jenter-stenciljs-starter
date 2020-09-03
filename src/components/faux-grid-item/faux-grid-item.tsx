import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'faux-grid-item',
  styleUrl: 'faux-grid-item.css',
  // shadow: true, //  <<=== causing issue when not ON
})

export class FauxGridItem {

  interval: any;

  @State() isactive: boolean = false;

  setToActive() {
    this.isactive = true;
  }

  clearTheInterval() {
    clearInterval(this.interval);
  }

  componentWillLoad() {
    this.interval = setInterval(() => {
      if (this.isactive) {
        this.clearTheInterval();
        return;
      };
      console.log('.: activate new wrapper :.');
      this.setToActive();
    }, 1000);
  }

  disconnectedCallback() {
    this.clearTheInterval();
  }

  render() {
    if (this.isactive) {
      return (
        <div class="delayed--wrapper">
          <slot />
        </div>
      );
    }
  }
}
