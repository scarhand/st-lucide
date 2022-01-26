import { newE2EPage } from '@stencil/core/testing';

describe('icon-monitor-speaker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor-speaker></icon-monitor-speaker>');

    const element = await page.find('icon-monitor-speaker');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor-speaker stroke="blue"></icon-monitor-speaker>');

    const element = await page.find('icon-monitor-speaker');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-monitor-speaker > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor-speaker stroke-width="2"></icon-monitor-speaker>');

    const element = await page.find('icon-monitor-speaker');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-monitor-speaker > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
