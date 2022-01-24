import { newE2EPage } from '@stencil/core/testing';

describe('icon-sort-desc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sort-desc></icon-sort-desc>');

    const element = await page.find('icon-sort-desc');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sort-desc stroke="blue"></icon-sort-desc>');

    const element = await page.find('icon-sort-desc');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sort-desc > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sort-desc stroke-width="2"></icon-sort-desc>');

    const element = await page.find('icon-sort-desc');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sort-desc > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
