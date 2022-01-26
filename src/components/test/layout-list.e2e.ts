import { newE2EPage } from '@stencil/core/testing';

describe('icon-layout-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-list></icon-layout-list>');

    const element = await page.find('icon-layout-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-list stroke="blue"></icon-layout-list>');

    const element = await page.find('icon-layout-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-layout-list > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layout-list stroke-width="2"></icon-layout-list>');

    const element = await page.find('icon-layout-list');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-layout-list > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
