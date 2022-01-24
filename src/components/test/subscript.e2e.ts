import { newE2EPage } from '@stencil/core/testing';

describe('icon-subscript', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-subscript></icon-subscript>');

    const element = await page.find('icon-subscript');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-subscript stroke="blue"></icon-subscript>');

    const element = await page.find('icon-subscript');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-subscript > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-subscript stroke-width="2"></icon-subscript>');

    const element = await page.find('icon-subscript');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-subscript > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
