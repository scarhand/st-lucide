import { newE2EPage } from '@stencil/core/testing';

describe('icon-hand', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hand></icon-hand>');

    const element = await page.find('icon-hand');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hand stroke="blue"></icon-hand>');

    const element = await page.find('icon-hand');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-hand > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-hand stroke-width="2"></icon-hand>');

    const element = await page.find('icon-hand');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-hand > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
