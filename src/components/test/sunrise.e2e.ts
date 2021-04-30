import { newE2EPage } from '@stencil/core/testing';

describe('icon-sunrise', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sunrise></icon-sunrise>');

    const element = await page.find('icon-sunrise');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sunrise stroke="blue"></icon-sunrise>');

    const element = await page.find('icon-sunrise');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sunrise > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sunrise stroke-width="2"></icon-sunrise>');

    const element = await page.find('icon-sunrise');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sunrise > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
