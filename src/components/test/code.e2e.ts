import { newE2EPage } from '@stencil/core/testing';

describe('icon-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-code></icon-code>');

    const element = await page.find('icon-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-code stroke="blue"></icon-code>');

    const element = await page.find('icon-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-code > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-code stroke-width="2"></icon-code>');

    const element = await page.find('icon-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-code > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
