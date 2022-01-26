import { newE2EPage } from '@stencil/core/testing';

describe('icon-list-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-plus></icon-list-plus>');

    const element = await page.find('icon-list-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-plus stroke="blue"></icon-list-plus>');

    const element = await page.find('icon-list-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-list-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-plus stroke-width="2"></icon-list-plus>');

    const element = await page.find('icon-list-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-list-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
