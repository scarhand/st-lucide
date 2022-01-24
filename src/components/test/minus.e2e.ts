import { newE2EPage } from '@stencil/core/testing';

describe('icon-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus></icon-minus>');

    const element = await page.find('icon-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus stroke="blue"></icon-minus>');

    const element = await page.find('icon-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus stroke-width="2"></icon-minus>');

    const element = await page.find('icon-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
