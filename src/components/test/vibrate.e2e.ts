import { newE2EPage } from '@stencil/core/testing';

describe('icon-vibrate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-vibrate></icon-vibrate>');

    const element = await page.find('icon-vibrate');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-vibrate stroke="blue"></icon-vibrate>');

    const element = await page.find('icon-vibrate');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-vibrate > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-vibrate stroke-width="2"></icon-vibrate>');

    const element = await page.find('icon-vibrate');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-vibrate > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
