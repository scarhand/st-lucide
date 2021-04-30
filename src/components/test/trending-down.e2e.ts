import { newE2EPage } from '@stencil/core/testing';

describe('icon-trending-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trending-down></icon-trending-down>');

    const element = await page.find('icon-trending-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trending-down stroke="blue"></icon-trending-down>');

    const element = await page.find('icon-trending-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-trending-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-trending-down stroke-width="2"></icon-trending-down>');

    const element = await page.find('icon-trending-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-trending-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
