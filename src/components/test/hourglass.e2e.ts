import { newE2EPage } from '@stencil/core/testing';

describe('icon-hourglass', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hourglass></icon-hourglass>');

    const element = await page.find('icon-hourglass');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hourglass stroke="blue"></icon-hourglass>');

    const element = await page.find('icon-hourglass');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-hourglass > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hourglass stroke-width="2"></icon-hourglass>');

    const element = await page.find('icon-hourglass');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-hourglass > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
