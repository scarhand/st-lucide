import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-warning', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-warning></icon-file-warning>');

    const element = await page.find('icon-file-warning');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-warning stroke="blue"></icon-file-warning>');

    const element = await page.find('icon-file-warning');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-warning > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-warning stroke-width="2"></icon-file-warning>');

    const element = await page.find('icon-file-warning');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-warning > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
