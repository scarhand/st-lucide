import { newE2EPage } from '@stencil/core/testing';

describe('icon-sigma', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sigma></icon-sigma>');

    const element = await page.find('icon-sigma');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sigma stroke="blue"></icon-sigma>');

    const element = await page.find('icon-sigma');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sigma > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sigma stroke-width="2"></icon-sigma>');

    const element = await page.find('icon-sigma');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sigma > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
