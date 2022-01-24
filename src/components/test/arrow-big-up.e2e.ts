import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-big-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-up></icon-arrow-big-up>');

    const element = await page.find('icon-arrow-big-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-up stroke="blue"></icon-arrow-big-up>');

    const element = await page.find('icon-arrow-big-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-big-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-up stroke-width="2"></icon-arrow-big-up>');

    const element = await page.find('icon-arrow-big-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-big-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
