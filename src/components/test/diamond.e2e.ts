import { newE2EPage } from '@stencil/core/testing';

describe('icon-diamond', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-diamond></icon-diamond>');

    const element = await page.find('icon-diamond');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-diamond stroke="blue"></icon-diamond>');

    const element = await page.find('icon-diamond');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-diamond > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-diamond stroke-width="2"></icon-diamond>');

    const element = await page.find('icon-diamond');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-diamond > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
