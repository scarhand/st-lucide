import { newE2EPage } from '@stencil/core/testing';

describe('icon-beaker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-beaker></icon-beaker>');

    const element = await page.find('icon-beaker');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-beaker stroke="blue"></icon-beaker>');

    const element = await page.find('icon-beaker');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-beaker > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-beaker stroke-width="2"></icon-beaker>');

    const element = await page.find('icon-beaker');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-beaker > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
