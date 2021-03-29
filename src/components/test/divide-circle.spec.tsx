import { newE2EPage } from '@stencil/core/testing';

describe('icon-divide-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-divide-circle></icon-divide-circle>');

    const element = await page.find('icon-divide-circle');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-divide-circle stroke="blue"></icon-divide-circle>');

    const element = await page.find('icon-divide-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-divide-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-divide-circle stroke-width="2"></icon-divide-circle>');

    const element = await page.find('icon-divide-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-divide-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
