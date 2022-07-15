import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-spreadsheet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-spreadsheet></icon-file-spreadsheet>');

    const element = await page.find('icon-file-spreadsheet');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-spreadsheet stroke="blue"></icon-file-spreadsheet>');

    const element = await page.find('icon-file-spreadsheet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-spreadsheet > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-spreadsheet stroke-width="2"></icon-file-spreadsheet>');

    const element = await page.find('icon-file-spreadsheet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-spreadsheet > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
