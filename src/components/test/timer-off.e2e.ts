import { newE2EPage } from '@stencil/core/testing';

describe('icon-timer-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer-off></icon-timer-off>');

    const element = await page.find('icon-timer-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer-off stroke="blue"></icon-timer-off>');

    const element = await page.find('icon-timer-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-timer-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-timer-off stroke-width="2"></icon-timer-off>');

    const element = await page.find('icon-timer-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-timer-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
