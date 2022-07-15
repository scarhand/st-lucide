import { newE2EPage } from '@stencil/core/testing';

describe('icon-lamp-floor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-floor></icon-lamp-floor>');

    const element = await page.find('icon-lamp-floor');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-floor stroke="blue"></icon-lamp-floor>');

    const element = await page.find('icon-lamp-floor');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-lamp-floor > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-lamp-floor stroke-width="2"></icon-lamp-floor>');

    const element = await page.find('icon-lamp-floor');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-lamp-floor > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
