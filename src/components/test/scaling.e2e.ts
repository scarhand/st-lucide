import { newE2EPage } from '@stencil/core/testing';

describe('icon-scaling', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scaling></icon-scaling>');

    const element = await page.find('icon-scaling');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scaling stroke="blue"></icon-scaling>');

    const element = await page.find('icon-scaling');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-scaling > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scaling stroke-width="2"></icon-scaling>');

    const element = await page.find('icon-scaling');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-scaling > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
