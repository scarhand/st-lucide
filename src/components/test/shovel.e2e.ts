import { newE2EPage } from '@stencil/core/testing';

describe('icon-shovel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shovel></icon-shovel>');

    const element = await page.find('icon-shovel');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shovel stroke="blue"></icon-shovel>');

    const element = await page.find('icon-shovel');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-shovel > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shovel stroke-width="2"></icon-shovel>');

    const element = await page.find('icon-shovel');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-shovel > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
