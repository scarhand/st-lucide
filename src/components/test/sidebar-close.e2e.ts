import { newE2EPage } from '@stencil/core/testing';

describe('icon-sidebar-close', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sidebar-close></icon-sidebar-close>');

    const element = await page.find('icon-sidebar-close');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sidebar-close stroke="blue"></icon-sidebar-close>');

    const element = await page.find('icon-sidebar-close');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sidebar-close > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sidebar-close stroke-width="2"></icon-sidebar-close>');

    const element = await page.find('icon-sidebar-close');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sidebar-close > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
