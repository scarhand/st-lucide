import { newE2EPage } from '@stencil/core/testing';

describe('icon-ice-cream', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ice-cream></icon-ice-cream>');

    const element = await page.find('icon-ice-cream');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ice-cream stroke="blue"></icon-ice-cream>');

    const element = await page.find('icon-ice-cream');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-ice-cream > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ice-cream stroke-width="2"></icon-ice-cream>');

    const element = await page.find('icon-ice-cream');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-ice-cream > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
