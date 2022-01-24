import { newE2EPage } from '@stencil/core/testing';

describe('icon-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-search></icon-search>');

    const element = await page.find('icon-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-search stroke="blue"></icon-search>');

    const element = await page.find('icon-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-search > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-search stroke-width="2"></icon-search>');

    const element = await page.find('icon-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-search > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
