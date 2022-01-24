import { newE2EPage } from '@stencil/core/testing';

describe('icon-wand', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wand></icon-wand>');

    const element = await page.find('icon-wand');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wand stroke="blue"></icon-wand>');

    const element = await page.find('icon-wand');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-wand > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wand stroke-width="2"></icon-wand>');

    const element = await page.find('icon-wand');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-wand > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
