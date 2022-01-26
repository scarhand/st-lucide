import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-big-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-right></icon-arrow-big-right>');

    const element = await page.find('icon-arrow-big-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-right stroke="blue"></icon-arrow-big-right>');

    const element = await page.find('icon-arrow-big-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-big-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-right stroke-width="2"></icon-arrow-big-right>');

    const element = await page.find('icon-arrow-big-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-big-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
