import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-up-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up-circle></icon-arrow-up-circle>');

    const element = await page.find('icon-arrow-up-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up-circle stroke="blue"></icon-arrow-up-circle>');

    const element = await page.find('icon-arrow-up-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-up-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-up-circle stroke-width="2"></icon-arrow-up-circle>');

    const element = await page.find('icon-arrow-up-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-up-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
