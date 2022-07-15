import { newE2EPage } from '@stencil/core/testing';

describe('icon-flip-horizontal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flip-horizontal></icon-flip-horizontal>');

    const element = await page.find('icon-flip-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flip-horizontal stroke="blue"></icon-flip-horizontal>');

    const element = await page.find('icon-flip-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-flip-horizontal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-flip-horizontal stroke-width="2"></icon-flip-horizontal>');

    const element = await page.find('icon-flip-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-flip-horizontal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
