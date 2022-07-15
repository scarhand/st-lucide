import { newE2EPage } from '@stencil/core/testing';

describe('icon-user-cog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-cog></icon-user-cog>');

    const element = await page.find('icon-user-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-cog stroke="blue"></icon-user-cog>');

    const element = await page.find('icon-user-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-user-cog > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-user-cog stroke-width="2"></icon-user-cog>');

    const element = await page.find('icon-user-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-user-cog > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
