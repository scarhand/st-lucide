import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevron-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-right></icon-chevron-right>');

    const element = await page.find('icon-chevron-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-right stroke="blue"></icon-chevron-right>');

    const element = await page.find('icon-chevron-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevron-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-right stroke-width="2"></icon-chevron-right>');

    const element = await page.find('icon-chevron-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevron-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
