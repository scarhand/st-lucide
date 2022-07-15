import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-cog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-cog></icon-folder-cog>');

    const element = await page.find('icon-folder-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-cog stroke="blue"></icon-folder-cog>');

    const element = await page.find('icon-folder-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-cog > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-cog stroke-width="2"></icon-folder-cog>');

    const element = await page.find('icon-folder-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-cog > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
