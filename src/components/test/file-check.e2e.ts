import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-check', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-check></icon-file-check>');

    const element = await page.find('icon-file-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-check stroke="blue"></icon-file-check>');

    const element = await page.find('icon-file-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-check > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-check stroke-width="2"></icon-file-check>');

    const element = await page.find('icon-file-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-check > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
