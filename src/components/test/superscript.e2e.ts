import { newE2EPage } from '@stencil/core/testing';

describe('icon-superscript', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-superscript></icon-superscript>');

    const element = await page.find('icon-superscript');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-superscript stroke="blue"></icon-superscript>');

    const element = await page.find('icon-superscript');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-superscript > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-superscript stroke-width="2"></icon-superscript>');

    const element = await page.find('icon-superscript');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-superscript > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
