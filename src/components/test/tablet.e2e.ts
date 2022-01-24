import { newE2EPage } from '@stencil/core/testing';

describe('icon-tablet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tablet></icon-tablet>');

    const element = await page.find('icon-tablet');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tablet stroke="blue"></icon-tablet>');

    const element = await page.find('icon-tablet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tablet > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tablet stroke-width="2"></icon-tablet>');

    const element = await page.find('icon-tablet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tablet > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
