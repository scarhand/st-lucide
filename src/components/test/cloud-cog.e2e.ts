import { newE2EPage } from '@stencil/core/testing';

describe('icon-cloud-cog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-cog></icon-cloud-cog>');

    const element = await page.find('icon-cloud-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-cog stroke="blue"></icon-cloud-cog>');

    const element = await page.find('icon-cloud-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cloud-cog > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cloud-cog stroke-width="2"></icon-cloud-cog>');

    const element = await page.find('icon-cloud-cog');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cloud-cog > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
