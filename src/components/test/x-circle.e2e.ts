import { newE2EPage } from '@stencil/core/testing';

describe('icon-x-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-circle></icon-x-circle>');

    const element = await page.find('icon-x-circle');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-circle stroke="blue"></icon-x-circle>');

    const element = await page.find('icon-x-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-x-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-circle stroke-width="2"></icon-x-circle>');

    const element = await page.find('icon-x-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-x-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
