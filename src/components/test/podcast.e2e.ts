import { newE2EPage } from '@stencil/core/testing';

describe('icon-podcast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-podcast></icon-podcast>');

    const element = await page.find('icon-podcast');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-podcast stroke="blue"></icon-podcast>');

    const element = await page.find('icon-podcast');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-podcast > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-podcast stroke-width="2"></icon-podcast>');

    const element = await page.find('icon-podcast');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-podcast > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
