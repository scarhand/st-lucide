import { newE2EPage } from '@stencil/core/testing';

describe('icon-triangle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-triangle></icon-triangle>');

    const element = await page.find('icon-triangle');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-triangle stroke="blue"></icon-triangle>');

    const element = await page.find('icon-triangle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-triangle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-triangle stroke-width="2"></icon-triangle>');

    const element = await page.find('icon-triangle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-triangle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
