import { newE2EPage } from '@stencil/core/testing';

describe('icon-trending-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trending-up></icon-trending-up>');

    const element = await page.find('icon-trending-up');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trending-up stroke="blue"></icon-trending-up>');

    const element = await page.find('icon-trending-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-trending-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trending-up stroke-width="2"></icon-trending-up>');

    const element = await page.find('icon-trending-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-trending-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
