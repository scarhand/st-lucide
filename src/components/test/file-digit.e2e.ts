import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-digit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-digit></icon-file-digit>');

    const element = await page.find('icon-file-digit');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-digit stroke="blue"></icon-file-digit>');

    const element = await page.find('icon-file-digit');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-digit > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-digit stroke-width="2"></icon-file-digit>');

    const element = await page.find('icon-file-digit');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-digit > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
