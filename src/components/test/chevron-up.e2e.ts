import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevron-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-up></icon-chevron-up>');

    const element = await page.find('icon-chevron-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-up stroke="blue"></icon-chevron-up>');

    const element = await page.find('icon-chevron-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevron-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-up stroke-width="2"></icon-chevron-up>');

    const element = await page.find('icon-chevron-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevron-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
