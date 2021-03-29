import { newE2EPage } from '@stencil/core/testing';

describe('icon-map-pin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map-pin></icon-map-pin>');

    const element = await page.find('icon-map-pin');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map-pin stroke="blue"></icon-map-pin>');

    const element = await page.find('icon-map-pin');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-map-pin > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-map-pin stroke-width="2"></icon-map-pin>');

    const element = await page.find('icon-map-pin');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-map-pin > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
