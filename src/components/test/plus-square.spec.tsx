import { newE2EPage } from '@stencil/core/testing';

describe('icon-plus-square', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus-square></icon-plus-square>');

    const element = await page.find('icon-plus-square');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus-square stroke="blue"></icon-plus-square>');

    const element = await page.find('icon-plus-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-plus-square > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-plus-square stroke-width="2"></icon-plus-square>');

    const element = await page.find('icon-plus-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-plus-square > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
