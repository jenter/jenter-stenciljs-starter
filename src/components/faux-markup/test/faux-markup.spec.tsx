import { newSpecPage } from '@stencil/core/testing';
import { FauxMarkup } from '../faux-markup';

describe('faux-markup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FauxMarkup],
      html: `<faux-markup></faux-markup>`,
    });
    expect(page.root).toEqualHtml(`
      <faux-markup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </faux-markup>
    `);
  });
});
