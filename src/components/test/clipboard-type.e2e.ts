import { newE2EPage } from '@stencil/core/testing';

describe('icon-clipboard-type', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-type></icon-clipboard-type>');

    const element = await page.find('icon-clipboard-type');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-type stroke="blue"></icon-clipboard-type>');

    const element = await page.find('icon-clipboard-type');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clipboard-type > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clipboard-type stroke-width="2"></icon-clipboard-type>');

    const element = await page.find('icon-clipboard-type');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clipboard-type > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
