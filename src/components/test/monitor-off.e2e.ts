import { newE2EPage } from '@stencil/core/testing';

describe('icon-monitor-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor-off></icon-monitor-off>');

    const element = await page.find('icon-monitor-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor-off stroke="blue"></icon-monitor-off>');

    const element = await page.find('icon-monitor-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-monitor-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-monitor-off stroke-width="2"></icon-monitor-off>');

    const element = await page.find('icon-monitor-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-monitor-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
