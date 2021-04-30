import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-right></icon-arrow-right>');

    const element = await page.find('icon-arrow-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-right stroke="blue"></icon-arrow-right>');

    const element = await page.find('icon-arrow-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-right stroke-width="2"></icon-arrow-right>');

    const element = await page.find('icon-arrow-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
