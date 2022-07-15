import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-key', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-key></icon-file-key>');

    const element = await page.find('icon-file-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-key stroke="blue"></icon-file-key>');

    const element = await page.find('icon-file-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-key > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-key stroke-width="2"></icon-file-key>');

    const element = await page.find('icon-file-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-key > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
