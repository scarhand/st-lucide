import { newE2EPage } from '@stencil/core/testing';

describe('icon-minimize', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minimize></icon-minimize>');

    const element = await page.find('icon-minimize');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minimize stroke="blue"></icon-minimize>');

    const element = await page.find('icon-minimize');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-minimize > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minimize stroke-width="2"></icon-minimize>');

    const element = await page.find('icon-minimize');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-minimize > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
