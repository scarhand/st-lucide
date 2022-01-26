import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevron-last', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-last></icon-chevron-last>');

    const element = await page.find('icon-chevron-last');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-last stroke="blue"></icon-chevron-last>');

    const element = await page.find('icon-chevron-last');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevron-last > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-last stroke-width="2"></icon-chevron-last>');

    const element = await page.find('icon-chevron-last');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevron-last > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
