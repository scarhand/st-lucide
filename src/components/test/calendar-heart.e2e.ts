import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar-heart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-heart></icon-calendar-heart>');

    const element = await page.find('icon-calendar-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-heart stroke="blue"></icon-calendar-heart>');

    const element = await page.find('icon-calendar-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar-heart > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-heart stroke-width="2"></icon-calendar-heart>');

    const element = await page.find('icon-calendar-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar-heart > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
