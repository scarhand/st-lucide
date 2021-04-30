import { newE2EPage } from '@stencil/core/testing';

describe('icon-at-sign', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-at-sign></icon-at-sign>');

    const element = await page.find('icon-at-sign');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-at-sign stroke="blue"></icon-at-sign>');

    const element = await page.find('icon-at-sign');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-at-sign > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-at-sign stroke-width="2"></icon-at-sign>');

    const element = await page.find('icon-at-sign');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-at-sign > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
