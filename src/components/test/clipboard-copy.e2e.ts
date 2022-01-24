import { newE2EPage } from '@stencil/core/testing';

describe('icon-clipboard-copy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-copy></icon-clipboard-copy>');

    const element = await page.find('icon-clipboard-copy');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-copy stroke="blue"></icon-clipboard-copy>');

    const element = await page.find('icon-clipboard-copy');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clipboard-copy > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-copy stroke-width="2"></icon-clipboard-copy>');

    const element = await page.find('icon-clipboard-copy');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clipboard-copy > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
