import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevrons-down-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-down-up></icon-chevrons-down-up>');

    const element = await page.find('icon-chevrons-down-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-down-up stroke="blue"></icon-chevrons-down-up>');

    const element = await page.find('icon-chevrons-down-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevrons-down-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-down-up stroke-width="2"></icon-chevrons-down-up>');

    const element = await page.find('icon-chevrons-down-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevrons-down-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
