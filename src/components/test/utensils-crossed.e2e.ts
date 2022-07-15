import { newE2EPage } from '@stencil/core/testing';

describe('icon-utensils-crossed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-utensils-crossed></icon-utensils-crossed>');

    const element = await page.find('icon-utensils-crossed');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-utensils-crossed stroke="blue"></icon-utensils-crossed>');

    const element = await page.find('icon-utensils-crossed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-utensils-crossed > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-utensils-crossed stroke-width="2"></icon-utensils-crossed>');

    const element = await page.find('icon-utensils-crossed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-utensils-crossed > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
