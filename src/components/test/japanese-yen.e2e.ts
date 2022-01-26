import { newE2EPage } from '@stencil/core/testing';

describe('icon-japanese-yen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-japanese-yen></icon-japanese-yen>');

    const element = await page.find('icon-japanese-yen');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-japanese-yen stroke="blue"></icon-japanese-yen>');

    const element = await page.find('icon-japanese-yen');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-japanese-yen > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-japanese-yen stroke-width="2"></icon-japanese-yen>');

    const element = await page.find('icon-japanese-yen');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-japanese-yen > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
