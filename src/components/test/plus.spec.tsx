import { newE2EPage } from '@stencil/core/testing';

describe('icon-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus></icon-plus>');

    const element = await page.find('icon-plus');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus stroke="blue"></icon-plus>');

    const element = await page.find('icon-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus stroke-width="2"></icon-plus>');

    const element = await page.find('icon-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
