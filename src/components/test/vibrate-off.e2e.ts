import { newE2EPage } from '@stencil/core/testing';

describe('icon-vibrate-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-vibrate-off></icon-vibrate-off>');

    const element = await page.find('icon-vibrate-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-vibrate-off stroke="blue"></icon-vibrate-off>');

    const element = await page.find('icon-vibrate-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-vibrate-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-vibrate-off stroke-width="2"></icon-vibrate-off>');

    const element = await page.find('icon-vibrate-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-vibrate-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
