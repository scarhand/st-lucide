import { newE2EPage } from '@stencil/core/testing';

describe('icon-sun', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun></icon-sun>');

    const element = await page.find('icon-sun');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun stroke="blue"></icon-sun>');

    const element = await page.find('icon-sun');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sun > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sun stroke-width="2"></icon-sun>');

    const element = await page.find('icon-sun');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sun > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
