import { newE2EPage } from '@stencil/core/testing';

describe('icon-brush', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-brush></icon-brush>');

    const element = await page.find('icon-brush');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-brush stroke="blue"></icon-brush>');

    const element = await page.find('icon-brush');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-brush > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-brush stroke-width="2"></icon-brush>');

    const element = await page.find('icon-brush');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-brush > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
