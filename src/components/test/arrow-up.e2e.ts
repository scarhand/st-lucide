import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up></icon-arrow-up>');

    const element = await page.find('icon-arrow-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up stroke="blue"></icon-arrow-up>');

    const element = await page.find('icon-arrow-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up stroke-width="2"></icon-arrow-up>');

    const element = await page.find('icon-arrow-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
