import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-big-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-down></icon-arrow-big-down>');

    const element = await page.find('icon-arrow-big-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-down stroke="blue"></icon-arrow-big-down>');

    const element = await page.find('icon-arrow-big-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-big-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-down stroke-width="2"></icon-arrow-big-down>');

    const element = await page.find('icon-arrow-big-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-big-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
