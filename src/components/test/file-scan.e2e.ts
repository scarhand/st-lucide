import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-scan', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-scan></icon-file-scan>');

    const element = await page.find('icon-file-scan');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-scan stroke="blue"></icon-file-scan>');

    const element = await page.find('icon-file-scan');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-scan > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-scan stroke-width="2"></icon-file-scan>');

    const element = await page.find('icon-file-scan');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-scan > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
