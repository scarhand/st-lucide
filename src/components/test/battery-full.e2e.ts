import { newE2EPage } from '@stencil/core/testing';

describe('icon-battery-full', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-full></icon-battery-full>');

    const element = await page.find('icon-battery-full');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-full stroke="blue"></icon-battery-full>');

    const element = await page.find('icon-battery-full');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-battery-full > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-full stroke-width="2"></icon-battery-full>');

    const element = await page.find('icon-battery-full');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-battery-full > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
