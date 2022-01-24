import { newE2EPage } from '@stencil/core/testing';

describe('icon-check-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check-circle></icon-check-circle>');

    const element = await page.find('icon-check-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check-circle stroke="blue"></icon-check-circle>');

    const element = await page.find('icon-check-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-check-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check-circle stroke-width="2"></icon-check-circle>');

    const element = await page.find('icon-check-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-check-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
