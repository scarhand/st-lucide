import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-search></icon-calendar-search>');

    const element = await page.find('icon-calendar-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-search stroke="blue"></icon-calendar-search>');

    const element = await page.find('icon-calendar-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar-search > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-search stroke-width="2"></icon-calendar-search>');

    const element = await page.find('icon-calendar-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar-search > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
