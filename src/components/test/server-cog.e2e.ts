import { newE2EPage } from '@stencil/core/testing';

describe('icon-server-cog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server-cog></icon-server-cog>');

    const element = await page.find('icon-server-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server-cog stroke="blue"></icon-server-cog>');

    const element = await page.find('icon-server-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-server-cog > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-server-cog stroke-width="2"></icon-server-cog>');

    const element = await page.find('icon-server-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-server-cog > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
