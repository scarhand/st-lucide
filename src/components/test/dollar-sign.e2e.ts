import { newE2EPage } from '@stencil/core/testing';

describe('icon-dollar-sign', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-dollar-sign></icon-dollar-sign>');

    const element = await page.find('icon-dollar-sign');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-dollar-sign stroke="blue"></icon-dollar-sign>');

    const element = await page.find('icon-dollar-sign');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-dollar-sign > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-dollar-sign stroke-width="2"></icon-dollar-sign>');

    const element = await page.find('icon-dollar-sign');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-dollar-sign > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
