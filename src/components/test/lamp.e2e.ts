import { newE2EPage } from '@stencil/core/testing';

describe('icon-lamp', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp></icon-lamp>');

    const element = await page.find('icon-lamp');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp stroke="blue"></icon-lamp>');

    const element = await page.find('icon-lamp');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lamp > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp stroke-width="2"></icon-lamp>');

    const element = await page.find('icon-lamp');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lamp > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
