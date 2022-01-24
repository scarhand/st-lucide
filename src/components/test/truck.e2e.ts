import { newE2EPage } from '@stencil/core/testing';

describe('icon-truck', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-truck></icon-truck>');

    const element = await page.find('icon-truck');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-truck stroke="blue"></icon-truck>');

    const element = await page.find('icon-truck');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-truck > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-truck stroke-width="2"></icon-truck>');

    const element = await page.find('icon-truck');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-truck > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
