import { newE2EPage } from '@stencil/core/testing';

describe('icon-heart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart></icon-heart>');

    const element = await page.find('icon-heart');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart stroke="blue"></icon-heart>');

    const element = await page.find('icon-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-heart > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-heart stroke-width="2"></icon-heart>');

    const element = await page.find('icon-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-heart > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
