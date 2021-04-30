import { newE2EPage } from '@stencil/core/testing';

describe('icon-delete', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-delete></icon-delete>');

    const element = await page.find('icon-delete');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-delete stroke="blue"></icon-delete>');

    const element = await page.find('icon-delete');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-delete > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-delete stroke-width="2"></icon-delete>');

    const element = await page.find('icon-delete');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-delete > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
