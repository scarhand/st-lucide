import { newE2EPage } from '@stencil/core/testing';

describe('icon-key', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-key></icon-key>');

    const element = await page.find('icon-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-key stroke="blue"></icon-key>');

    const element = await page.find('icon-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-key > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-key stroke-width="2"></icon-key>');

    const element = await page.find('icon-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-key > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
