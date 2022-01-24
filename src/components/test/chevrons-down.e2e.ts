import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevrons-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-down></icon-chevrons-down>');

    const element = await page.find('icon-chevrons-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-down stroke="blue"></icon-chevrons-down>');

    const element = await page.find('icon-chevrons-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevrons-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-down stroke-width="2"></icon-chevrons-down>');

    const element = await page.find('icon-chevrons-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevrons-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
