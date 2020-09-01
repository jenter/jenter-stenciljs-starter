import { newE2EPage } from '@stencil/core/testing';

describe('faux-inner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<faux-inner></faux-inner>');

    const element = await page.find('faux-inner');
    expect(element).toHaveClass('hydrated');
  });
});
