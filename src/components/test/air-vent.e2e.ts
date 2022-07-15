import { newE2EPage } from '@stencil/core/testing';

describe('icon-air-vent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-air-vent></icon-air-vent>');

    const element = await page.find('icon-air-vent');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-air-vent stroke="blue"></icon-air-vent>');

    const element = await page.find('icon-air-vent');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-air-vent > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-air-vent stroke-width="2"></icon-air-vent>');

    const element = await page.find('icon-air-vent');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-air-vent > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
