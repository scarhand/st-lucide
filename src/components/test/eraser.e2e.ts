import { newE2EPage } from '@stencil/core/testing';

describe('icon-eraser', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eraser></icon-eraser>');

    const element = await page.find('icon-eraser');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eraser stroke="blue"></icon-eraser>');

    const element = await page.find('icon-eraser');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-eraser > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-eraser stroke-width="2"></icon-eraser>');

    const element = await page.find('icon-eraser');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-eraser > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
