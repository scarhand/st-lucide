import { newE2EPage } from '@stencil/core/testing';

describe('icon-image-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image-minus></icon-image-minus>');

    const element = await page.find('icon-image-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image-minus stroke="blue"></icon-image-minus>');

    const element = await page.find('icon-image-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-image-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-image-minus stroke-width="2"></icon-image-minus>');

    const element = await page.find('icon-image-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-image-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
