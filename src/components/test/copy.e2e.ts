import { newE2EPage } from '@stencil/core/testing';

describe('icon-copy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copy></icon-copy>');

    const element = await page.find('icon-copy');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copy stroke="blue"></icon-copy>');

    const element = await page.find('icon-copy');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-copy > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-copy stroke-width="2"></icon-copy>');

    const element = await page.find('icon-copy');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-copy > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
