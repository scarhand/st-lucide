import { newE2EPage } from '@stencil/core/testing';

describe('icon-battery-low', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-low></icon-battery-low>');

    const element = await page.find('icon-battery-low');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-low stroke="blue"></icon-battery-low>');

    const element = await page.find('icon-battery-low');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-battery-low > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-low stroke-width="2"></icon-battery-low>');

    const element = await page.find('icon-battery-low');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-battery-low > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
