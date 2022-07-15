import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-x></icon-calendar-x>');

    const element = await page.find('icon-calendar-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-x stroke="blue"></icon-calendar-x>');

    const element = await page.find('icon-calendar-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar-x > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-x stroke-width="2"></icon-calendar-x>');

    const element = await page.find('icon-calendar-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar-x > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
