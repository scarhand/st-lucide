import { newE2EPage } from '@stencil/core/testing';

describe('icon-banana', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-banana></icon-banana>');

    const element = await page.find('icon-banana');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-banana stroke="blue"></icon-banana>');

    const element = await page.find('icon-banana');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-banana > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-banana stroke-width="2"></icon-banana>');

    const element = await page.find('icon-banana');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-banana > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
