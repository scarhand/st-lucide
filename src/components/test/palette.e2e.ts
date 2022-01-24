import { newE2EPage } from '@stencil/core/testing';

describe('icon-palette', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-palette></icon-palette>');

    const element = await page.find('icon-palette');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-palette stroke="blue"></icon-palette>');

    const element = await page.find('icon-palette');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-palette > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-palette stroke-width="2"></icon-palette>');

    const element = await page.find('icon-palette');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-palette > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
