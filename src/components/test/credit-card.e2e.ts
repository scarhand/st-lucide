import { newE2EPage } from '@stencil/core/testing';

describe('icon-credit-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-credit-card></icon-credit-card>');

    const element = await page.find('icon-credit-card');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-credit-card stroke="blue"></icon-credit-card>');

    const element = await page.find('icon-credit-card');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-credit-card > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-credit-card stroke-width="2"></icon-credit-card>');

    const element = await page.find('icon-credit-card');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-credit-card > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
