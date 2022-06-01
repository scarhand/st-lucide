import { newE2EPage } from '@stencil/core/testing';

describe('icon-bar-chart-3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart-3></icon-bar-chart-3>');

    const element = await page.find('icon-bar-chart-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart-3 stroke="blue"></icon-bar-chart-3>');

    const element = await page.find('icon-bar-chart-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bar-chart-3 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bar-chart-3 stroke-width="2"></icon-bar-chart-3>');

    const element = await page.find('icon-bar-chart-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bar-chart-3 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
