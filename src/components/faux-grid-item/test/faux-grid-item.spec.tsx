import { newSpecPage } from '@stencil/core/testing';
import { FauxGridItem } from '../faux-grid-item';

describe('faux-grid-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FauxGridItem],
      html: `<faux-grid-item></faux-grid-item>`,
    });
    expect(page.root).toEqualHtml(`
      <faux-grid-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </faux-grid-item>
    `);
  });
});
