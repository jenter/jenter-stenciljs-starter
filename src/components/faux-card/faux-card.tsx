import { Component, h } from '@stencil/core'; //  Host,

@Component({
  tag: 'faux-card',
  styleUrl: 'faux-card.css',
  shadow: true,
})
export class FauxCard {

  render() {
    return (
      <div class="faux-card">
        <div class="faux-card__wrapper">
          <div class="aside">
            <slot name="aside"></slot>
          </div>
          <div class="faux-card__main">
            <div class="header">
              <slot name="header"></slot>
            </div>
            <div class="body">
              <slot name="body"></slot>
            </div>
            <div class="footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
