import { newE2EPage } from '@stencil/core/testing';

describe('icon-hand-metal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hand-metal></icon-hand-metal>');

    const element = await page.find('icon-hand-metal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hand-metal stroke="blue"></icon-hand-metal>');

    const element = await page.find('icon-hand-metal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-hand-metal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hand-metal stroke-width="2"></icon-hand-metal>');

    const element = await page.find('icon-hand-metal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-hand-metal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
