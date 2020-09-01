import { newSpecPage } from '@stencil/core/testing';
import { FauxInner } from '../faux-inner';

describe('faux-inner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FauxInner],
      html: `<faux-inner></faux-inner>`,
    });
    expect(page.root).toEqualHtml(`
      <faux-inner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </faux-inner>
    `);
  });
});
