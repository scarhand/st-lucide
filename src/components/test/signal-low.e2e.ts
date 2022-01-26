import { newE2EPage } from '@stencil/core/testing';

describe('icon-signal-low', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-low></icon-signal-low>');

    const element = await page.find('icon-signal-low');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-low stroke="blue"></icon-signal-low>');

    const element = await page.find('icon-signal-low');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-signal-low > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-signal-low stroke-width="2"></icon-signal-low>');

    const element = await page.find('icon-signal-low');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-signal-low > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
