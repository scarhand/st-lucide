import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-down></icon-folder-down>');

    const element = await page.find('icon-folder-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-down stroke="blue"></icon-folder-down>');

    const element = await page.find('icon-folder-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-down stroke-width="2"></icon-folder-down>');

    const element = await page.find('icon-folder-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
