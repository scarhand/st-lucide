import { newE2EPage } from '@stencil/core/testing';

describe('icon-puzzle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-puzzle></icon-puzzle>');

    const element = await page.find('icon-puzzle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-puzzle stroke="blue"></icon-puzzle>');

    const element = await page.find('icon-puzzle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-puzzle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-puzzle stroke-width="2"></icon-puzzle>');

    const element = await page.find('icon-puzzle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-puzzle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
