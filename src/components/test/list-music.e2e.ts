import { newE2EPage } from '@stencil/core/testing';

describe('icon-list-music', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-music></icon-list-music>');

    const element = await page.find('icon-list-music');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-music stroke="blue"></icon-list-music>');

    const element = await page.find('icon-list-music');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-list-music > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-music stroke-width="2"></icon-list-music>');

    const element = await page.find('icon-list-music');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-list-music > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
