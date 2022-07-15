import { newE2EPage } from '@stencil/core/testing';

describe('icon-pizza', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pizza></icon-pizza>');

    const element = await page.find('icon-pizza');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pizza stroke="blue"></icon-pizza>');

    const element = await page.find('icon-pizza');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pizza > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pizza stroke-width="2"></icon-pizza>');

    const element = await page.find('icon-pizza');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pizza > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
