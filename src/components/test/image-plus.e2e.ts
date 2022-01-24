import { newE2EPage } from '@stencil/core/testing';

describe('icon-image-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image-plus></icon-image-plus>');

    const element = await page.find('icon-image-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image-plus stroke="blue"></icon-image-plus>');

    const element = await page.find('icon-image-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-image-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image-plus stroke-width="2"></icon-image-plus>');

    const element = await page.find('icon-image-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-image-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
