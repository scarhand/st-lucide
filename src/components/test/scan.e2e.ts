import { newE2EPage } from '@stencil/core/testing';

describe('icon-scan', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan></icon-scan>');

    const element = await page.find('icon-scan');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan stroke="blue"></icon-scan>');

    const element = await page.find('icon-scan');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-scan > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan stroke-width="2"></icon-scan>');

    const element = await page.find('icon-scan');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-scan > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
