import { newE2EPage } from '@stencil/core/testing';

describe('icon-infinity', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-infinity></icon-infinity>');

    const element = await page.find('icon-infinity');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-infinity stroke="blue"></icon-infinity>');

    const element = await page.find('icon-infinity');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-infinity > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-infinity stroke-width="2"></icon-infinity>');

    const element = await page.find('icon-infinity');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-infinity > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
