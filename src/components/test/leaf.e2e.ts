import { newE2EPage } from '@stencil/core/testing';

describe('icon-leaf', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-leaf></icon-leaf>');

    const element = await page.find('icon-leaf');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-leaf stroke="blue"></icon-leaf>');

    const element = await page.find('icon-leaf');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-leaf > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-leaf stroke-width="2"></icon-leaf>');

    const element = await page.find('icon-leaf');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-leaf > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
