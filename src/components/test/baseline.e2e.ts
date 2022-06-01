import { newE2EPage } from '@stencil/core/testing';

describe('icon-baseline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baseline></icon-baseline>');

    const element = await page.find('icon-baseline');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baseline stroke="blue"></icon-baseline>');

    const element = await page.find('icon-baseline');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-baseline > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baseline stroke-width="2"></icon-baseline>');

    const element = await page.find('icon-baseline');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-baseline > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
