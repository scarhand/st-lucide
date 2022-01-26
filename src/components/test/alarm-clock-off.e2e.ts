import { newE2EPage } from '@stencil/core/testing';

describe('icon-alarm-clock-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-clock-off></icon-alarm-clock-off>');

    const element = await page.find('icon-alarm-clock-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-clock-off stroke="blue"></icon-alarm-clock-off>');

    const element = await page.find('icon-alarm-clock-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-alarm-clock-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alarm-clock-off stroke-width="2"></icon-alarm-clock-off>');

    const element = await page.find('icon-alarm-clock-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-alarm-clock-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
