import { newE2EPage } from '@stencil/core/testing';

describe('icon-crosshair', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-crosshair></icon-crosshair>');

    const element = await page.find('icon-crosshair');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-crosshair stroke="blue"></icon-crosshair>');

    const element = await page.find('icon-crosshair');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-crosshair > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-crosshair stroke-width="2"></icon-crosshair>');

    const element = await page.find('icon-crosshair');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-crosshair > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
