import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar-range', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-range></icon-calendar-range>');

    const element = await page.find('icon-calendar-range');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-range stroke="blue"></icon-calendar-range>');

    const element = await page.find('icon-calendar-range');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar-range > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-range stroke-width="2"></icon-calendar-range>');

    const element = await page.find('icon-calendar-range');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar-range > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
