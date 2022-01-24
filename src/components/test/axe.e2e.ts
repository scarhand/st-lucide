import { newE2EPage } from '@stencil/core/testing';

describe('icon-axe', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-axe></icon-axe>');

    const element = await page.find('icon-axe');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-axe stroke="blue"></icon-axe>');

    const element = await page.find('icon-axe');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-axe > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-axe stroke-width="2"></icon-axe>');

    const element = await page.find('icon-axe');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-axe > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
