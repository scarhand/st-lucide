import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-check', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-check></icon-folder-check>');

    const element = await page.find('icon-folder-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-check stroke="blue"></icon-folder-check>');

    const element = await page.find('icon-folder-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-check > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-check stroke-width="2"></icon-folder-check>');

    const element = await page.find('icon-folder-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-check > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
