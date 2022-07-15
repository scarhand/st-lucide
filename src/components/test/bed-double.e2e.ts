import { newE2EPage } from '@stencil/core/testing';

describe('icon-bed-double', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed-double></icon-bed-double>');

    const element = await page.find('icon-bed-double');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed-double stroke="blue"></icon-bed-double>');

    const element = await page.find('icon-bed-double');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bed-double > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bed-double stroke-width="2"></icon-bed-double>');

    const element = await page.find('icon-bed-double');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bed-double > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
