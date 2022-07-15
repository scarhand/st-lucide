import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-closed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-closed></icon-folder-closed>');

    const element = await page.find('icon-folder-closed');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-closed stroke="blue"></icon-folder-closed>');

    const element = await page.find('icon-folder-closed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-closed > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-closed stroke-width="2"></icon-folder-closed>');

    const element = await page.find('icon-folder-closed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-closed > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
