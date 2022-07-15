import { newE2EPage } from '@stencil/core/testing';

describe('icon-bomb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bomb></icon-bomb>');

    const element = await page.find('icon-bomb');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bomb stroke="blue"></icon-bomb>');

    const element = await page.find('icon-bomb');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bomb > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bomb stroke-width="2"></icon-bomb>');

    const element = await page.find('icon-bomb');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bomb > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
