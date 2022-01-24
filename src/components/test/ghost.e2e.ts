import { newE2EPage } from '@stencil/core/testing';

describe('icon-ghost', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ghost></icon-ghost>');

    const element = await page.find('icon-ghost');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ghost stroke="blue"></icon-ghost>');

    const element = await page.find('icon-ghost');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-ghost > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-ghost stroke-width="2"></icon-ghost>');

    const element = await page.find('icon-ghost');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-ghost > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
