import { newE2EPage } from '@stencil/core/testing';

describe('icon-signal-zero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-zero></icon-signal-zero>');

    const element = await page.find('icon-signal-zero');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-zero stroke="blue"></icon-signal-zero>');

    const element = await page.find('icon-signal-zero');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-signal-zero > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-zero stroke-width="2"></icon-signal-zero>');

    const element = await page.find('icon-signal-zero');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-signal-zero > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
