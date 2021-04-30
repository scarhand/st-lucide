import { newE2EPage } from '@stencil/core/testing';

describe('icon-columns', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-columns></icon-columns>');

    const element = await page.find('icon-columns');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-columns stroke="blue"></icon-columns>');

    const element = await page.find('icon-columns');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-columns > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-columns stroke-width="2"></icon-columns>');

    const element = await page.find('icon-columns');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-columns > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
