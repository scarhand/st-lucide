import { newE2EPage } from '@stencil/core/testing';

describe('icon-library', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-library></icon-library>');

    const element = await page.find('icon-library');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-library stroke="blue"></icon-library>');

    const element = await page.find('icon-library');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-library > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-library stroke-width="2"></icon-library>');

    const element = await page.find('icon-library');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-library > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
