import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-edit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-edit></icon-folder-edit>');

    const element = await page.find('icon-folder-edit');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-edit stroke="blue"></icon-folder-edit>');

    const element = await page.find('icon-folder-edit');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-edit > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-edit stroke-width="2"></icon-folder-edit>');

    const element = await page.find('icon-folder-edit');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-edit > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
