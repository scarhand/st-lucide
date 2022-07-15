import { newE2EPage } from '@stencil/core/testing';

describe('icon-cherry', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cherry></icon-cherry>');

    const element = await page.find('icon-cherry');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cherry stroke="blue"></icon-cherry>');

    const element = await page.find('icon-cherry');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cherry > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cherry stroke-width="2"></icon-cherry>');

    const element = await page.find('icon-cherry');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cherry > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
