import { newE2EPage } from '@stencil/core/testing';

describe('icon-tags', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tags></icon-tags>');

    const element = await page.find('icon-tags');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tags stroke="blue"></icon-tags>');

    const element = await page.find('icon-tags');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tags > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tags stroke-width="2"></icon-tags>');

    const element = await page.find('icon-tags');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tags > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
