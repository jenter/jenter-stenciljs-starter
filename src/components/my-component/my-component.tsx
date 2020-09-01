import { Component, Prop, State, Listen, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() open: boolean = false;

  @Listen('click', { capture: true })
  handleClick() {
    console.log('handleClick', this.open);
    this.open = !this.open;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="test-component">
      Hello, World! I'm {this.getText()}
      {this.open
        ? <div class="is-opened"><p>Click Open</p></div>
        : <span></span>
      }
    </div>;
  }
}
