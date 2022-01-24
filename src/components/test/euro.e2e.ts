import { newE2EPage } from '@stencil/core/testing';

describe('icon-euro', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-euro></icon-euro>');

    const element = await page.find('icon-euro');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-euro stroke="blue"></icon-euro>');

    const element = await page.find('icon-euro');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-euro > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-euro stroke-width="2"></icon-euro>');

    const element = await page.find('icon-euro');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-euro > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
