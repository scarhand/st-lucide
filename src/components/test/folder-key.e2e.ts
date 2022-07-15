import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-key', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-key></icon-folder-key>');

    const element = await page.find('icon-folder-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-key stroke="blue"></icon-folder-key>');

    const element = await page.find('icon-folder-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-key > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-key stroke-width="2"></icon-folder-key>');

    const element = await page.find('icon-folder-key');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-key > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
