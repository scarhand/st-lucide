import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevron-first', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-first></icon-chevron-first>');

    const element = await page.find('icon-chevron-first');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-first stroke="blue"></icon-chevron-first>');

    const element = await page.find('icon-chevron-first');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevron-first > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-first stroke-width="2"></icon-chevron-first>');

    const element = await page.find('icon-chevron-first');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevron-first > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
