import { newE2EPage } from '@stencil/core/testing';

describe('icon-scroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scroll></icon-scroll>');

    const element = await page.find('icon-scroll');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scroll stroke="blue"></icon-scroll>');

    const element = await page.find('icon-scroll');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-scroll > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scroll stroke-width="2"></icon-scroll>');

    const element = await page.find('icon-scroll');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-scroll > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
