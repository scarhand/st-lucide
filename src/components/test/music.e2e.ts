import { newE2EPage } from '@stencil/core/testing';

describe('icon-music', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music></icon-music>');

    const element = await page.find('icon-music');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music stroke="blue"></icon-music>');

    const element = await page.find('icon-music');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-music > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music stroke-width="2"></icon-music>');

    const element = await page.find('icon-music');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-music > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
