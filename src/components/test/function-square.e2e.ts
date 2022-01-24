import { newE2EPage } from '@stencil/core/testing';

describe('icon-function-square', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-function-square></icon-function-square>');

    const element = await page.find('icon-function-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-function-square stroke="blue"></icon-function-square>');

    const element = await page.find('icon-function-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-function-square > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-function-square stroke-width="2"></icon-function-square>');

    const element = await page.find('icon-function-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-function-square > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
