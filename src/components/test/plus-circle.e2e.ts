import { newE2EPage } from '@stencil/core/testing';

describe('icon-plus-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus-circle></icon-plus-circle>');

    const element = await page.find('icon-plus-circle');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus-circle stroke="blue"></icon-plus-circle>');

    const element = await page.find('icon-plus-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-plus-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus-circle stroke-width="2"></icon-plus-circle>');

    const element = await page.find('icon-plus-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-plus-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
