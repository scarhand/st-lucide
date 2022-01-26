import { newE2EPage } from '@stencil/core/testing';

describe('icon-graduation-cap', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-graduation-cap></icon-graduation-cap>');

    const element = await page.find('icon-graduation-cap');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-graduation-cap stroke="blue"></icon-graduation-cap>');

    const element = await page.find('icon-graduation-cap');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-graduation-cap > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-graduation-cap stroke-width="2"></icon-graduation-cap>');

    const element = await page.find('icon-graduation-cap');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-graduation-cap > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
