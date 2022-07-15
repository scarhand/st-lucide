import { newE2EPage } from '@stencil/core/testing';

describe('icon-lamp-ceiling', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-ceiling></icon-lamp-ceiling>');

    const element = await page.find('icon-lamp-ceiling');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-ceiling stroke="blue"></icon-lamp-ceiling>');

    const element = await page.find('icon-lamp-ceiling');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lamp-ceiling > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-ceiling stroke-width="2"></icon-lamp-ceiling>');

    const element = await page.find('icon-lamp-ceiling');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lamp-ceiling > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
