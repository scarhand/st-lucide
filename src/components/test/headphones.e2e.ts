import { newE2EPage } from '@stencil/core/testing';

describe('icon-headphones', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-headphones></icon-headphones>');

    const element = await page.find('icon-headphones');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-headphones stroke="blue"></icon-headphones>');

    const element = await page.find('icon-headphones');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-headphones > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-headphones stroke-width="2"></icon-headphones>');

    const element = await page.find('icon-headphones');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-headphones > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
