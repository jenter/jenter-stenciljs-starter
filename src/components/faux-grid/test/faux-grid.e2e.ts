import { newE2EPage } from '@stencil/core/testing';

describe('faux-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<faux-grid></faux-grid>');

    const element = await page.find('faux-grid');
    expect(element).toHaveClass('hydrated');
  });
});
