import { newE2EPage } from '@stencil/core/testing';

describe('icon-shopping-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shopping-cart></icon-shopping-cart>');

    const element = await page.find('icon-shopping-cart');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shopping-cart stroke="blue"></icon-shopping-cart>');

    const element = await page.find('icon-shopping-cart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-shopping-cart > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shopping-cart stroke-width="2"></icon-shopping-cart>');

    const element = await page.find('icon-shopping-cart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-shopping-cart > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
