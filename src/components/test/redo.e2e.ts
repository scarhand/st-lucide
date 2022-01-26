import { newE2EPage } from '@stencil/core/testing';

describe('icon-redo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-redo></icon-redo>');

    const element = await page.find('icon-redo');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-redo stroke="blue"></icon-redo>');

    const element = await page.find('icon-redo');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-redo > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-redo stroke-width="2"></icon-redo>');

    const element = await page.find('icon-redo');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-redo > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
