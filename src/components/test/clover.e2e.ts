import { newE2EPage } from '@stencil/core/testing';

describe('icon-clover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clover></icon-clover>');

    const element = await page.find('icon-clover');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clover stroke="blue"></icon-clover>');

    const element = await page.find('icon-clover');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clover > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clover stroke-width="2"></icon-clover>');

    const element = await page.find('icon-clover');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clover > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
