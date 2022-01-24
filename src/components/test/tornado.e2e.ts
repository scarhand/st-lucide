import { newE2EPage } from '@stencil/core/testing';

describe('icon-tornado', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tornado></icon-tornado>');

    const element = await page.find('icon-tornado');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tornado stroke="blue"></icon-tornado>');

    const element = await page.find('icon-tornado');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tornado > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tornado stroke-width="2"></icon-tornado>');

    const element = await page.find('icon-tornado');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tornado > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
