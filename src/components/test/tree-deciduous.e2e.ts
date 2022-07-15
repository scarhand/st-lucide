import { newE2EPage } from '@stencil/core/testing';

describe('icon-tree-deciduous', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tree-deciduous></icon-tree-deciduous>');

    const element = await page.find('icon-tree-deciduous');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tree-deciduous stroke="blue"></icon-tree-deciduous>');

    const element = await page.find('icon-tree-deciduous');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tree-deciduous > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tree-deciduous stroke-width="2"></icon-tree-deciduous>');

    const element = await page.find('icon-tree-deciduous');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tree-deciduous > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
