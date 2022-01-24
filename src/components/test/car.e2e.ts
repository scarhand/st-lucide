import { newE2EPage } from '@stencil/core/testing';

describe('icon-car', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-car></icon-car>');

    const element = await page.find('icon-car');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-car stroke="blue"></icon-car>');

    const element = await page.find('icon-car');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-car > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-car stroke-width="2"></icon-car>');

    const element = await page.find('icon-car');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-car > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
