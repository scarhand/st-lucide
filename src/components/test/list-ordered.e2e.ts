import { newE2EPage } from '@stencil/core/testing';

describe('icon-list-ordered', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-ordered></icon-list-ordered>');

    const element = await page.find('icon-list-ordered');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-ordered stroke="blue"></icon-list-ordered>');

    const element = await page.find('icon-list-ordered');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-list-ordered > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-list-ordered stroke-width="2"></icon-list-ordered>');

    const element = await page.find('icon-list-ordered');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-list-ordered > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
