import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-x', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-x></icon-folder-x>');

    const element = await page.find('icon-folder-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-x stroke="blue"></icon-folder-x>');

    const element = await page.find('icon-folder-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-x > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-x stroke-width="2"></icon-folder-x>');

    const element = await page.find('icon-folder-x');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-x > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
