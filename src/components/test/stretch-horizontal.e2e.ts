import { newE2EPage } from '@stencil/core/testing';

describe('icon-stretch-horizontal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stretch-horizontal></icon-stretch-horizontal>');

    const element = await page.find('icon-stretch-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stretch-horizontal stroke="blue"></icon-stretch-horizontal>');

    const element = await page.find('icon-stretch-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-stretch-horizontal > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-stretch-horizontal stroke-width="2"></icon-stretch-horizontal>');

    const element = await page.find('icon-stretch-horizontal');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-stretch-horizontal > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
