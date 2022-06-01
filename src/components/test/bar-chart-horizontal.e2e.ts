import { newE2EPage } from '@stencil/core/testing';

describe('icon-bar-chart-horizontal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart-horizontal></icon-bar-chart-horizontal>');

    const element = await page.find('icon-bar-chart-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart-horizontal stroke="blue"></icon-bar-chart-horizontal>');

    const element = await page.find('icon-bar-chart-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bar-chart-horizontal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart-horizontal stroke-width="2"></icon-bar-chart-horizontal>');

    const element = await page.find('icon-bar-chart-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bar-chart-horizontal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
