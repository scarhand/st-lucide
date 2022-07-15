import { newE2EPage } from '@stencil/core/testing';

describe('icon-backpack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-backpack></icon-backpack>');

    const element = await page.find('icon-backpack');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-backpack stroke="blue"></icon-backpack>');

    const element = await page.find('icon-backpack');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-backpack > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-backpack stroke-width="2"></icon-backpack>');

    const element = await page.find('icon-backpack');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-backpack > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
