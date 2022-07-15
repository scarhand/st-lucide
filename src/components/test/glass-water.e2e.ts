import { newE2EPage } from '@stencil/core/testing';

describe('icon-glass-water', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-glass-water></icon-glass-water>');

    const element = await page.find('icon-glass-water');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-glass-water stroke="blue"></icon-glass-water>');

    const element = await page.find('icon-glass-water');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-glass-water > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-glass-water stroke-width="2"></icon-glass-water>');

    const element = await page.find('icon-glass-water');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-glass-water > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
