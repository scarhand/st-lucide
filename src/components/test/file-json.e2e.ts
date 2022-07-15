import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-json', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-json></icon-file-json>');

    const element = await page.find('icon-file-json');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-json stroke="blue"></icon-file-json>');

    const element = await page.find('icon-file-json');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-json > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-json stroke-width="2"></icon-file-json>');

    const element = await page.find('icon-file-json');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-json > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
