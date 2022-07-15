import { newE2EPage } from '@stencil/core/testing';

describe('icon-laugh', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-laugh></icon-laugh>');

    const element = await page.find('icon-laugh');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-laugh stroke="blue"></icon-laugh>');

    const element = await page.find('icon-laugh');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-laugh > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-laugh stroke-width="2"></icon-laugh>');

    const element = await page.find('icon-laugh');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-laugh > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
