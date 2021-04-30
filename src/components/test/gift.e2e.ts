import { newE2EPage } from '@stencil/core/testing';

describe('icon-gift', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gift></icon-gift>');

    const element = await page.find('icon-gift');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gift stroke="blue"></icon-gift>');

    const element = await page.find('icon-gift');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-gift > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gift stroke-width="2"></icon-gift>');

    const element = await page.find('icon-gift');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-gift > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
