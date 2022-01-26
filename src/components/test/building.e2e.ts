import { newE2EPage } from '@stencil/core/testing';

describe('icon-building', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-building></icon-building>');

    const element = await page.find('icon-building');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-building stroke="blue"></icon-building>');

    const element = await page.find('icon-building');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-building > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-building stroke-width="2"></icon-building>');

    const element = await page.find('icon-building');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-building > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
