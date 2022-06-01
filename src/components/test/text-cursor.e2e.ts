import { newE2EPage } from '@stencil/core/testing';

describe('icon-text-cursor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-text-cursor></icon-text-cursor>');

    const element = await page.find('icon-text-cursor');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-text-cursor stroke="blue"></icon-text-cursor>');

    const element = await page.find('icon-text-cursor');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-text-cursor > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-text-cursor stroke-width="2"></icon-text-cursor>');

    const element = await page.find('icon-text-cursor');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-text-cursor > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
