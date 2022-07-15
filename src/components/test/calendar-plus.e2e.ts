import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-plus></icon-calendar-plus>');

    const element = await page.find('icon-calendar-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-plus stroke="blue"></icon-calendar-plus>');

    const element = await page.find('icon-calendar-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-plus stroke-width="2"></icon-calendar-plus>');

    const element = await page.find('icon-calendar-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
