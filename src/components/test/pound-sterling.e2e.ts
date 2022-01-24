import { newE2EPage } from '@stencil/core/testing';

describe('icon-pound-sterling', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pound-sterling></icon-pound-sterling>');

    const element = await page.find('icon-pound-sterling');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pound-sterling stroke="blue"></icon-pound-sterling>');

    const element = await page.find('icon-pound-sterling');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-pound-sterling > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-pound-sterling stroke-width="2"></icon-pound-sterling>');

    const element = await page.find('icon-pound-sterling');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-pound-sterling > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
