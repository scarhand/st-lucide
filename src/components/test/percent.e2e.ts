import { newE2EPage } from '@stencil/core/testing';

describe('icon-percent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-percent></icon-percent>');

    const element = await page.find('icon-percent');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-percent stroke="blue"></icon-percent>');

    const element = await page.find('icon-percent');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-percent > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-percent stroke-width="2"></icon-percent>');

    const element = await page.find('icon-percent');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-percent > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
