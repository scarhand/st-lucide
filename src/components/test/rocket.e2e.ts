import { newE2EPage } from '@stencil/core/testing';

describe('icon-rocket', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rocket></icon-rocket>');

    const element = await page.find('icon-rocket');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rocket stroke="blue"></icon-rocket>');

    const element = await page.find('icon-rocket');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-rocket > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rocket stroke-width="2"></icon-rocket>');

    const element = await page.find('icon-rocket');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-rocket > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
