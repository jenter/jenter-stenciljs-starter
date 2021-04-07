import { newE2EPage } from '@stencil/core/testing';

describe('faux-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<faux-card></faux-card>');

    const element = await page.find('faux-card');
    expect(element).toHaveClass('hydrated');
  });
});
