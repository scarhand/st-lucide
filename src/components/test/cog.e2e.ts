import { newE2EPage } from '@stencil/core/testing';

describe('icon-cog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cog></icon-cog>');

    const element = await page.find('icon-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cog stroke="blue"></icon-cog>');

    const element = await page.find('icon-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cog > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cog stroke-width="2"></icon-cog>');

    const element = await page.find('icon-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cog > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
