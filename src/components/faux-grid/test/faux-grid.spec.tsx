import { newSpecPage } from '@stencil/core/testing';
import { FauxGrid } from '../faux-grid';

describe('faux-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FauxGrid],
      html: `<faux-grid></faux-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <faux-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </faux-grid>
    `);
  });
});
