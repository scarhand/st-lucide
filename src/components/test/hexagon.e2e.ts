import { newE2EPage } from '@stencil/core/testing';

describe('icon-hexagon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hexagon></icon-hexagon>');

    const element = await page.find('icon-hexagon');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hexagon stroke="blue"></icon-hexagon>');

    const element = await page.find('icon-hexagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-hexagon > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hexagon stroke-width="2"></icon-hexagon>');

    const element = await page.find('icon-hexagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-hexagon > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
