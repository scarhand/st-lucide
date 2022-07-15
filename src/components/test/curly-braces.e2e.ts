import { newE2EPage } from '@stencil/core/testing';

describe('icon-curly-braces', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-curly-braces></icon-curly-braces>');

    const element = await page.find('icon-curly-braces');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-curly-braces stroke="blue"></icon-curly-braces>');

    const element = await page.find('icon-curly-braces');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-curly-braces > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-curly-braces stroke-width="2"></icon-curly-braces>');

    const element = await page.find('icon-curly-braces');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-curly-braces > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
