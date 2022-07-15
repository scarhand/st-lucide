import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-diff', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-diff></icon-file-diff>');

    const element = await page.find('icon-file-diff');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-diff stroke="blue"></icon-file-diff>');

    const element = await page.find('icon-file-diff');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-diff > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-diff stroke-width="2"></icon-file-diff>');

    const element = await page.find('icon-file-diff');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-diff > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
