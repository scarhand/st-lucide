import { newE2EPage } from '@stencil/core/testing';

describe('icon-clipboard-check', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-check></icon-clipboard-check>');

    const element = await page.find('icon-clipboard-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-check stroke="blue"></icon-clipboard-check>');

    const element = await page.find('icon-clipboard-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clipboard-check > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-check stroke-width="2"></icon-clipboard-check>');

    const element = await page.find('icon-clipboard-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clipboard-check > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
