import { newE2EPage } from '@stencil/core/testing';

describe('icon-bus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bus></icon-bus>');

    const element = await page.find('icon-bus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bus stroke="blue"></icon-bus>');

    const element = await page.find('icon-bus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bus stroke-width="2"></icon-bus>');

    const element = await page.find('icon-bus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
