import { newE2EPage } from '@stencil/core/testing';

describe('icon-cake', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cake></icon-cake>');

    const element = await page.find('icon-cake');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cake stroke="blue"></icon-cake>');

    const element = await page.find('icon-cake');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cake > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cake stroke-width="2"></icon-cake>');

    const element = await page.find('icon-cake');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cake > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
