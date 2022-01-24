import { newE2EPage } from '@stencil/core/testing';

describe('icon-download', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-download></icon-download>');

    const element = await page.find('icon-download');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-download stroke="blue"></icon-download>');

    const element = await page.find('icon-download');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-download > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-download stroke-width="2"></icon-download>');

    const element = await page.find('icon-download');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-download > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
