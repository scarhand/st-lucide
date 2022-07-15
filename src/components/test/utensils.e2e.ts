import { newE2EPage } from '@stencil/core/testing';

describe('icon-utensils', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-utensils></icon-utensils>');

    const element = await page.find('icon-utensils');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-utensils stroke="blue"></icon-utensils>');

    const element = await page.find('icon-utensils');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-utensils > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-utensils stroke-width="2"></icon-utensils>');

    const element = await page.find('icon-utensils');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-utensils > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
