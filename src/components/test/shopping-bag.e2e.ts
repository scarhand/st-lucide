import { newE2EPage } from '@stencil/core/testing';

describe('icon-shopping-bag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shopping-bag></icon-shopping-bag>');

    const element = await page.find('icon-shopping-bag');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shopping-bag stroke="blue"></icon-shopping-bag>');

    const element = await page.find('icon-shopping-bag');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-shopping-bag > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shopping-bag stroke-width="2"></icon-shopping-bag>');

    const element = await page.find('icon-shopping-bag');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-shopping-bag > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
