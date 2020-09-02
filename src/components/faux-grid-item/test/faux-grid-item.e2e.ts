import { newE2EPage } from '@stencil/core/testing';

describe('faux-grid-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<faux-grid-item></faux-grid-item>');

    const element = await page.find('faux-grid-item');
    expect(element).toHaveClass('hydrated');
  });
});
