import { newE2EPage } from '@stencil/core/testing';

describe('icon-divide', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-divide></icon-divide>');

    const element = await page.find('icon-divide');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-divide stroke="blue"></icon-divide>');

    const element = await page.find('icon-divide');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-divide > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-divide stroke-width="2"></icon-divide>');

    const element = await page.find('icon-divide');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-divide > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
