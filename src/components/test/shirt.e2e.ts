import { newE2EPage } from '@stencil/core/testing';

describe('icon-shirt', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shirt></icon-shirt>');

    const element = await page.find('icon-shirt');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shirt stroke="blue"></icon-shirt>');

    const element = await page.find('icon-shirt');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-shirt > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-shirt stroke-width="2"></icon-shirt>');

    const element = await page.find('icon-shirt');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-shirt > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
