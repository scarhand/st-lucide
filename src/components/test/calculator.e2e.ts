import { newE2EPage } from '@stencil/core/testing';

describe('icon-calculator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calculator></icon-calculator>');

    const element = await page.find('icon-calculator');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calculator stroke="blue"></icon-calculator>');

    const element = await page.find('icon-calculator');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calculator > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calculator stroke-width="2"></icon-calculator>');

    const element = await page.find('icon-calculator');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calculator > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
