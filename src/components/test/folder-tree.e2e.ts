import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-tree', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-tree></icon-folder-tree>');

    const element = await page.find('icon-folder-tree');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-tree stroke="blue"></icon-folder-tree>');

    const element = await page.find('icon-folder-tree');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-tree > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-tree stroke-width="2"></icon-folder-tree>');

    const element = await page.find('icon-folder-tree');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-tree > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
