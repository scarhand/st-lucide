import { newE2EPage } from '@stencil/core/testing';

describe('icon-gauge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gauge></icon-gauge>');

    const element = await page.find('icon-gauge');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gauge stroke="blue"></icon-gauge>');

    const element = await page.find('icon-gauge');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-gauge > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gauge stroke-width="2"></icon-gauge>');

    const element = await page.find('icon-gauge');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-gauge > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
