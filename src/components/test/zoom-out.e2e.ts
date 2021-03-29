import { newE2EPage } from '@stencil/core/testing';

describe('icon-zoom-out', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-zoom-out></icon-zoom-out>');

    const element = await page.find('icon-zoom-out');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-zoom-out stroke="blue"></icon-zoom-out>');

    const element = await page.find('icon-zoom-out');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-zoom-out > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-zoom-out stroke-width="2"></icon-zoom-out>');

    const element = await page.find('icon-zoom-out');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-zoom-out > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
