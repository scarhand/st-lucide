import { newE2EPage } from '@stencil/core/testing';

describe('icon-power-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-power-off></icon-power-off>');

    const element = await page.find('icon-power-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-power-off stroke="blue"></icon-power-off>');

    const element = await page.find('icon-power-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-power-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-power-off stroke-width="2"></icon-power-off>');

    const element = await page.find('icon-power-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-power-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
