import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-badge-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-badge-2></icon-file-badge-2>');

    const element = await page.find('icon-file-badge-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-badge-2 stroke="blue"></icon-file-badge-2>');

    const element = await page.find('icon-file-badge-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-badge-2 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-badge-2 stroke-width="2"></icon-file-badge-2>');

    const element = await page.find('icon-file-badge-2');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-badge-2 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});