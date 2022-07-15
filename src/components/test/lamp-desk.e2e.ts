import { newE2EPage } from '@stencil/core/testing';

describe('icon-lamp-desk', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-desk></icon-lamp-desk>');

    const element = await page.find('icon-lamp-desk');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-desk stroke="blue"></icon-lamp-desk>');

    const element = await page.find('icon-lamp-desk');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lamp-desk > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-desk stroke-width="2"></icon-lamp-desk>');

    const element = await page.find('icon-lamp-desk');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lamp-desk > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
