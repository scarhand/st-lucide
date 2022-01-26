import { newE2EPage } from '@stencil/core/testing';

describe('icon-qr-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-qr-code></icon-qr-code>');

    const element = await page.find('icon-qr-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-qr-code stroke="blue"></icon-qr-code>');

    const element = await page.find('icon-qr-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-qr-code > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-qr-code stroke-width="2"></icon-qr-code>');

    const element = await page.find('icon-qr-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-qr-code > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
