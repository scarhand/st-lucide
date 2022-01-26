import { newE2EPage } from '@stencil/core/testing';

describe('icon-scan-line', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan-line></icon-scan-line>');

    const element = await page.find('icon-scan-line');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan-line stroke="blue"></icon-scan-line>');

    const element = await page.find('icon-scan-line');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-scan-line > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-scan-line stroke-width="2"></icon-scan-line>');

    const element = await page.find('icon-scan-line');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-scan-line > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
