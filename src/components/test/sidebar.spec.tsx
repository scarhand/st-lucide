import { newE2EPage } from '@stencil/core/testing';

describe('icon-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sidebar></icon-sidebar>');

    const element = await page.find('icon-sidebar');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sidebar stroke="blue"></icon-sidebar>');

    const element = await page.find('icon-sidebar');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sidebar > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sidebar stroke-width="2"></icon-sidebar>');

    const element = await page.find('icon-sidebar');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sidebar > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
