import { newE2EPage } from '@stencil/core/testing';

describe('icon-russian-ruble', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-russian-ruble></icon-russian-ruble>');

    const element = await page.find('icon-russian-ruble');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-russian-ruble stroke="blue"></icon-russian-ruble>');

    const element = await page.find('icon-russian-ruble');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-russian-ruble > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-russian-ruble stroke-width="2"></icon-russian-ruble>');

    const element = await page.find('icon-russian-ruble');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-russian-ruble > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
