import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-big-left', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-left></icon-arrow-big-left>');

    const element = await page.find('icon-arrow-big-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-left stroke="blue"></icon-arrow-big-left>');

    const element = await page.find('icon-arrow-big-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-big-left > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-big-left stroke-width="2"></icon-arrow-big-left>');

    const element = await page.find('icon-arrow-big-left');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-big-left > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
