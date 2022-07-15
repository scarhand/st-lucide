import { newE2EPage } from '@stencil/core/testing';

describe('icon-sofa', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sofa></icon-sofa>');

    const element = await page.find('icon-sofa');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sofa stroke="blue"></icon-sofa>');

    const element = await page.find('icon-sofa');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sofa > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sofa stroke-width="2"></icon-sofa>');

    const element = await page.find('icon-sofa');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sofa > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
