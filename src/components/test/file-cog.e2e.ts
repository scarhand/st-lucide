import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-cog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-cog></icon-file-cog>');

    const element = await page.find('icon-file-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-cog stroke="blue"></icon-file-cog>');

    const element = await page.find('icon-file-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-cog > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-cog stroke-width="2"></icon-file-cog>');

    const element = await page.find('icon-file-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-cog > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
