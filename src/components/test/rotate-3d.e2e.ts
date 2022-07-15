import { newE2EPage } from '@stencil/core/testing';

describe('icon-rotate-3d', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-3d></icon-rotate-3d>');

    const element = await page.find('icon-rotate-3d');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-3d stroke="blue"></icon-rotate-3d>');

    const element = await page.find('icon-rotate-3d');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-rotate-3d > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-rotate-3d stroke-width="2"></icon-rotate-3d>');

    const element = await page.find('icon-rotate-3d');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-rotate-3d > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
