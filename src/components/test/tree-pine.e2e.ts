import { newE2EPage } from '@stencil/core/testing';

describe('icon-tree-pine', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tree-pine></icon-tree-pine>');

    const element = await page.find('icon-tree-pine');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tree-pine stroke="blue"></icon-tree-pine>');

    const element = await page.find('icon-tree-pine');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tree-pine > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tree-pine stroke-width="2"></icon-tree-pine>');

    const element = await page.find('icon-tree-pine');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tree-pine > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
