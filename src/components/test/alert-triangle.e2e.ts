import { newE2EPage } from '@stencil/core/testing';

describe('icon-alert-triangle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-triangle></icon-alert-triangle>');

    const element = await page.find('icon-alert-triangle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-triangle stroke="blue"></icon-alert-triangle>');

    const element = await page.find('icon-alert-triangle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-alert-triangle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-triangle stroke-width="2"></icon-alert-triangle>');

    const element = await page.find('icon-alert-triangle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-alert-triangle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
