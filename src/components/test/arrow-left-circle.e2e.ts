import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-left-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-left-circle></icon-arrow-left-circle>');

    const element = await page.find('icon-arrow-left-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-left-circle stroke="blue"></icon-arrow-left-circle>');

    const element = await page.find('icon-arrow-left-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-left-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-left-circle stroke-width="2"></icon-arrow-left-circle>');

    const element = await page.find('icon-arrow-left-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-left-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
