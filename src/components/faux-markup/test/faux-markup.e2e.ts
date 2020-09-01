import { newE2EPage } from '@stencil/core/testing';

describe('faux-markup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<faux-markup></faux-markup>');

    const element = await page.find('faux-markup');
    expect(element).toHaveClass('hydrated');
  });
});
