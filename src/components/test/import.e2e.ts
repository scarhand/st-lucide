import { newE2EPage } from '@stencil/core/testing';

describe('icon-import', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-import></icon-import>');

    const element = await page.find('icon-import');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-import stroke="blue"></icon-import>');

    const element = await page.find('icon-import');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-import > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-import stroke-width="2"></icon-import>');

    const element = await page.find('icon-import');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-import > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
