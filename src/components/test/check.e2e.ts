import { newE2EPage } from '@stencil/core/testing';

describe('icon-check', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check></icon-check>');

    const element = await page.find('icon-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check stroke="blue"></icon-check>');

    const element = await page.find('icon-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-check > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check stroke-width="2"></icon-check>');

    const element = await page.find('icon-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-check > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
