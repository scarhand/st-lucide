import { newE2EPage } from '@stencil/core/testing';

describe('icon-shuffle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shuffle></icon-shuffle>');

    const element = await page.find('icon-shuffle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shuffle stroke="blue"></icon-shuffle>');

    const element = await page.find('icon-shuffle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-shuffle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shuffle stroke-width="2"></icon-shuffle>');

    const element = await page.find('icon-shuffle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-shuffle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
