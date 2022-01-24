import { newE2EPage } from '@stencil/core/testing';

describe('icon-contrast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-contrast></icon-contrast>');

    const element = await page.find('icon-contrast');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-contrast stroke="blue"></icon-contrast>');

    const element = await page.find('icon-contrast');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-contrast > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-contrast stroke-width="2"></icon-contrast>');

    const element = await page.find('icon-contrast');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-contrast > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
