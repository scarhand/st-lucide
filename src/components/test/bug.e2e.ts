import { newE2EPage } from '@stencil/core/testing';

describe('icon-bug', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bug></icon-bug>');

    const element = await page.find('icon-bug');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bug stroke="blue"></icon-bug>');

    const element = await page.find('icon-bug');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bug > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bug stroke-width="2"></icon-bug>');

    const element = await page.find('icon-bug');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bug > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
