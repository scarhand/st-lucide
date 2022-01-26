import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-down-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down-right></icon-arrow-down-right>');

    const element = await page.find('icon-arrow-down-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down-right stroke="blue"></icon-arrow-down-right>');

    const element = await page.find('icon-arrow-down-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-down-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down-right stroke-width="2"></icon-arrow-down-right>');

    const element = await page.find('icon-arrow-down-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-down-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
