import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-minus></icon-calendar-minus>');

    const element = await page.find('icon-calendar-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-minus stroke="blue"></icon-calendar-minus>');

    const element = await page.find('icon-calendar-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-minus stroke-width="2"></icon-calendar-minus>');

    const element = await page.find('icon-calendar-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
