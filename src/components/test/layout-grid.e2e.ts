import { newE2EPage } from '@stencil/core/testing';

describe('icon-layout-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-grid></icon-layout-grid>');

    const element = await page.find('icon-layout-grid');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-grid stroke="blue"></icon-layout-grid>');

    const element = await page.find('icon-layout-grid');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-layout-grid > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-grid stroke-width="2"></icon-layout-grid>');

    const element = await page.find('icon-layout-grid');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-layout-grid > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
