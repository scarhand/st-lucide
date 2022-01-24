import { newE2EPage } from '@stencil/core/testing';

describe('icon-layout-dashboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-dashboard></icon-layout-dashboard>');

    const element = await page.find('icon-layout-dashboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-dashboard stroke="blue"></icon-layout-dashboard>');

    const element = await page.find('icon-layout-dashboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-layout-dashboard > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-dashboard stroke-width="2"></icon-layout-dashboard>');

    const element = await page.find('icon-layout-dashboard');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-layout-dashboard > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
