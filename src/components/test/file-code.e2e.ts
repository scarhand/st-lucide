import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-code', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-code></icon-file-code>');

    const element = await page.find('icon-file-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-code stroke="blue"></icon-file-code>');

    const element = await page.find('icon-file-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-code > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-code stroke-width="2"></icon-file-code>');

    const element = await page.find('icon-file-code');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-code > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
