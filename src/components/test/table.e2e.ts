import { newE2EPage } from '@stencil/core/testing';

describe('icon-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-table></icon-table>');

    const element = await page.find('icon-table');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-table stroke="blue"></icon-table>');

    const element = await page.find('icon-table');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-table > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-table stroke-width="2"></icon-table>');

    const element = await page.find('icon-table');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-table > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
