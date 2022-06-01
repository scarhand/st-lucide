import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevrons-left-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-left-right></icon-chevrons-left-right>');

    const element = await page.find('icon-chevrons-left-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-left-right stroke="blue"></icon-chevrons-left-right>');

    const element = await page.find('icon-chevrons-left-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevrons-left-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevrons-left-right stroke-width="2"></icon-chevrons-left-right>');

    const element = await page.find('icon-chevrons-left-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevrons-left-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
