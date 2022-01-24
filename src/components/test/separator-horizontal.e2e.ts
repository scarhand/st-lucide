import { newE2EPage } from '@stencil/core/testing';

describe('icon-separator-horizontal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-separator-horizontal></icon-separator-horizontal>');

    const element = await page.find('icon-separator-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-separator-horizontal stroke="blue"></icon-separator-horizontal>');

    const element = await page.find('icon-separator-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-separator-horizontal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-separator-horizontal stroke-width="2"></icon-separator-horizontal>');

    const element = await page.find('icon-separator-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-separator-horizontal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
