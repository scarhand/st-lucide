import { newE2EPage } from '@stencil/core/testing';

describe('icon-bitcoin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bitcoin></icon-bitcoin>');

    const element = await page.find('icon-bitcoin');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bitcoin stroke="blue"></icon-bitcoin>');

    const element = await page.find('icon-bitcoin');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bitcoin > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bitcoin stroke-width="2"></icon-bitcoin>');

    const element = await page.find('icon-bitcoin');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bitcoin > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
