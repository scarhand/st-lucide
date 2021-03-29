import { newE2EPage } from '@stencil/core/testing';

describe('icon-moon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-moon></icon-moon>');

    const element = await page.find('icon-moon');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-moon stroke="blue"></icon-moon>');

    const element = await page.find('icon-moon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-moon > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-moon stroke-width="2"></icon-moon>');

    const element = await page.find('icon-moon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-moon > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
