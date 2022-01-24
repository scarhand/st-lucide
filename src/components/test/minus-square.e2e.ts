import { newE2EPage } from '@stencil/core/testing';

describe('icon-minus-square', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus-square></icon-minus-square>');

    const element = await page.find('icon-minus-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus-square stroke="blue"></icon-minus-square>');

    const element = await page.find('icon-minus-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-minus-square > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-minus-square stroke-width="2"></icon-minus-square>');

    const element = await page.find('icon-minus-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-minus-square > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
