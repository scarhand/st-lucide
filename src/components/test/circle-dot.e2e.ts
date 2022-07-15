import { newE2EPage } from '@stencil/core/testing';

describe('icon-circle-dot', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-dot></icon-circle-dot>');

    const element = await page.find('icon-circle-dot');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-dot stroke="blue"></icon-circle-dot>');

    const element = await page.find('icon-circle-dot');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-circle-dot > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-dot stroke-width="2"></icon-circle-dot>');

    const element = await page.find('icon-circle-dot');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-circle-dot > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
