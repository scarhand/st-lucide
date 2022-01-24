import { newE2EPage } from '@stencil/core/testing';

describe('icon-sort-asc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sort-asc></icon-sort-asc>');

    const element = await page.find('icon-sort-asc');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sort-asc stroke="blue"></icon-sort-asc>');

    const element = await page.find('icon-sort-asc');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sort-asc > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sort-asc stroke-width="2"></icon-sort-asc>');

    const element = await page.find('icon-sort-asc');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sort-asc > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
