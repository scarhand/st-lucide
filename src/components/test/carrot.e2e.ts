import { newE2EPage } from '@stencil/core/testing';

describe('icon-carrot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-carrot></icon-carrot>');

    const element = await page.find('icon-carrot');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-carrot stroke="blue"></icon-carrot>');

    const element = await page.find('icon-carrot');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-carrot > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-carrot stroke-width="2"></icon-carrot>');

    const element = await page.find('icon-carrot');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-carrot > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
