import { newE2EPage } from '@stencil/core/testing';

describe('icon-wind', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wind></icon-wind>');

    const element = await page.find('icon-wind');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wind stroke="blue"></icon-wind>');

    const element = await page.find('icon-wind');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-wind > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wind stroke-width="2"></icon-wind>');

    const element = await page.find('icon-wind');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-wind > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
