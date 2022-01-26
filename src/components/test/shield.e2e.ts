import { newE2EPage } from '@stencil/core/testing';

describe('icon-shield', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shield></icon-shield>');

    const element = await page.find('icon-shield');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shield stroke="blue"></icon-shield>');

    const element = await page.find('icon-shield');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-shield > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shield stroke-width="2"></icon-shield>');

    const element = await page.find('icon-shield');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-shield > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
