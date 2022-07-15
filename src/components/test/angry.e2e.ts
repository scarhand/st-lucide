import { newE2EPage } from '@stencil/core/testing';

describe('icon-angry', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-angry></icon-angry>');

    const element = await page.find('icon-angry');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-angry stroke="blue"></icon-angry>');

    const element = await page.find('icon-angry');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-angry > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-angry stroke-width="2"></icon-angry>');

    const element = await page.find('icon-angry');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-angry > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
