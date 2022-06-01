import { newE2EPage } from '@stencil/core/testing';

describe('icon-palmtree', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-palmtree></icon-palmtree>');

    const element = await page.find('icon-palmtree');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-palmtree stroke="blue"></icon-palmtree>');

    const element = await page.find('icon-palmtree');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-palmtree > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-palmtree stroke-width="2"></icon-palmtree>');

    const element = await page.find('icon-palmtree');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-palmtree > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
