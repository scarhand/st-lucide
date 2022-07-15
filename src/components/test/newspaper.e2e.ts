import { newE2EPage } from '@stencil/core/testing';

describe('icon-newspaper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-newspaper></icon-newspaper>');

    const element = await page.find('icon-newspaper');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-newspaper stroke="blue"></icon-newspaper>');

    const element = await page.find('icon-newspaper');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-newspaper > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-newspaper stroke-width="2"></icon-newspaper>');

    const element = await page.find('icon-newspaper');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-newspaper > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
