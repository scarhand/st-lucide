import { newE2EPage } from '@stencil/core/testing';

describe('icon-cross', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cross></icon-cross>');

    const element = await page.find('icon-cross');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cross stroke="blue"></icon-cross>');

    const element = await page.find('icon-cross');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cross > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cross stroke-width="2"></icon-cross>');

    const element = await page.find('icon-cross');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cross > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
