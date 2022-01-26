import { newE2EPage } from '@stencil/core/testing';

describe('icon-bookmark-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bookmark-plus></icon-bookmark-plus>');

    const element = await page.find('icon-bookmark-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bookmark-plus stroke="blue"></icon-bookmark-plus>');

    const element = await page.find('icon-bookmark-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bookmark-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bookmark-plus stroke-width="2"></icon-bookmark-plus>');

    const element = await page.find('icon-bookmark-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bookmark-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
