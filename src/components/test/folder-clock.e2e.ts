import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-clock></icon-folder-clock>');

    const element = await page.find('icon-folder-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-clock stroke="blue"></icon-folder-clock>');

    const element = await page.find('icon-folder-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-clock > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-clock stroke-width="2"></icon-folder-clock>');

    const element = await page.find('icon-folder-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-clock > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
