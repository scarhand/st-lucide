import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-up></icon-folder-up>');

    const element = await page.find('icon-folder-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-up stroke="blue"></icon-folder-up>');

    const element = await page.find('icon-folder-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-up stroke-width="2"></icon-folder-up>');

    const element = await page.find('icon-folder-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
