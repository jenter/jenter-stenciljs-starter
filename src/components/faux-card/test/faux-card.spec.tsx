import { newSpecPage } from '@stencil/core/testing';
import { FauxCard } from '../faux-card';

describe('faux-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FauxCard],
      html: `<faux-card></faux-card>`,
    });
    expect(page.root).toEqualHtml(`
      <faux-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </faux-card>
    `);
  });
});
