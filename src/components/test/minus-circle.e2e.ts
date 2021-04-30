import { newE2EPage } from '@stencil/core/testing';

describe('icon-minus-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus-circle></icon-minus-circle>');

    const element = await page.find('icon-minus-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus-circle stroke="blue"></icon-minus-circle>');

    const element = await page.find('icon-minus-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-minus-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus-circle stroke-width="2"></icon-minus-circle>');

    const element = await page.find('icon-minus-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-minus-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
