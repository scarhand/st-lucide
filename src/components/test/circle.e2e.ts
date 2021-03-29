import { newE2EPage } from '@stencil/core/testing';

describe('icon-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle></icon-circle>');

    const element = await page.find('icon-circle');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle stroke="blue"></icon-circle>');

    const element = await page.find('icon-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle stroke-width="2"></icon-circle>');

    const element = await page.find('icon-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
