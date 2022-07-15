import { newE2EPage } from '@stencil/core/testing';

describe('icon-beer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-beer></icon-beer>');

    const element = await page.find('icon-beer');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-beer stroke="blue"></icon-beer>');

    const element = await page.find('icon-beer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-beer > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-beer stroke-width="2"></icon-beer>');

    const element = await page.find('icon-beer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-beer > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
