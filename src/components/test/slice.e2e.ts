import { newE2EPage } from '@stencil/core/testing';

describe('icon-slice', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slice></icon-slice>');

    const element = await page.find('icon-slice');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slice stroke="blue"></icon-slice>');

    const element = await page.find('icon-slice');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-slice > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-slice stroke-width="2"></icon-slice>');

    const element = await page.find('icon-slice');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-slice > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
