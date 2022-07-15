import { newE2EPage } from '@stencil/core/testing';

describe('icon-baby', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baby></icon-baby>');

    const element = await page.find('icon-baby');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baby stroke="blue"></icon-baby>');

    const element = await page.find('icon-baby');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-baby > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-baby stroke-width="2"></icon-baby>');

    const element = await page.find('icon-baby');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-baby > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
