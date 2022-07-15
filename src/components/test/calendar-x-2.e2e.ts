import { newE2EPage } from '@stencil/core/testing';

describe('icon-calendar-x-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-x-2></icon-calendar-x-2>');

    const element = await page.find('icon-calendar-x-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-x-2 stroke="blue"></icon-calendar-x-2>');

    const element = await page.find('icon-calendar-x-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-calendar-x-2 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-calendar-x-2 stroke-width="2"></icon-calendar-x-2>');

    const element = await page.find('icon-calendar-x-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-calendar-x-2 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
