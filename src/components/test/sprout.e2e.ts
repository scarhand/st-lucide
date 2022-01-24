import { newE2EPage } from '@stencil/core/testing';

describe('icon-sprout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sprout></icon-sprout>');

    const element = await page.find('icon-sprout');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sprout stroke="blue"></icon-sprout>');

    const element = await page.find('icon-sprout');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sprout > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sprout stroke-width="2"></icon-sprout>');

    const element = await page.find('icon-sprout');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sprout > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
