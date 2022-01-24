import { newE2EPage } from '@stencil/core/testing';

describe('icon-x-square', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-square></icon-x-square>');

    const element = await page.find('icon-x-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-square stroke="blue"></icon-x-square>');

    const element = await page.find('icon-x-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-x-square > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-x-square stroke-width="2"></icon-x-square>');

    const element = await page.find('icon-x-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-x-square > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
