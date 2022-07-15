import { newE2EPage } from '@stencil/core/testing';

describe('icon-diff', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-diff></icon-diff>');

    const element = await page.find('icon-diff');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-diff stroke="blue"></icon-diff>');

    const element = await page.find('icon-diff');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-diff > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-diff stroke-width="2"></icon-diff>');

    const element = await page.find('icon-diff');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-diff > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
