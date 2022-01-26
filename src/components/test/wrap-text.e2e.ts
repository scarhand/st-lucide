import { newE2EPage } from '@stencil/core/testing';

describe('icon-wrap-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wrap-text></icon-wrap-text>');

    const element = await page.find('icon-wrap-text');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wrap-text stroke="blue"></icon-wrap-text>');

    const element = await page.find('icon-wrap-text');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-wrap-text > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-wrap-text stroke-width="2"></icon-wrap-text>');

    const element = await page.find('icon-wrap-text');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-wrap-text > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
