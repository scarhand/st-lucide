import { newE2EPage } from '@stencil/core/testing';

describe('icon-circle-ellipsis', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-ellipsis></icon-circle-ellipsis>');

    const element = await page.find('icon-circle-ellipsis');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-ellipsis stroke="blue"></icon-circle-ellipsis>');

    const element = await page.find('icon-circle-ellipsis');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-circle-ellipsis > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-ellipsis stroke-width="2"></icon-circle-ellipsis>');

    const element = await page.find('icon-circle-ellipsis');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-circle-ellipsis > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
