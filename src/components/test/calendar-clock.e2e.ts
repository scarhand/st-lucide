import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-clock></icon-calendar-clock>');

    const element = await page.find('icon-calendar-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-clock stroke="blue"></icon-calendar-clock>');

    const element = await page.find('icon-calendar-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar-clock > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-clock stroke-width="2"></icon-calendar-clock>');

    const element = await page.find('icon-calendar-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar-clock > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
