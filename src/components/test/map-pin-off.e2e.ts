import { newE2EPage } from '@stencil/core/testing';

describe('icon-map-pin-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map-pin-off></icon-map-pin-off>');

    const element = await page.find('icon-map-pin-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map-pin-off stroke="blue"></icon-map-pin-off>');

    const element = await page.find('icon-map-pin-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-map-pin-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map-pin-off stroke-width="2"></icon-map-pin-off>');

    const element = await page.find('icon-map-pin-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-map-pin-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
