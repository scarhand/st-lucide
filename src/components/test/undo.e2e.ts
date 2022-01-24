import { newE2EPage } from '@stencil/core/testing';

describe('icon-undo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-undo></icon-undo>');

    const element = await page.find('icon-undo');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-undo stroke="blue"></icon-undo>');

    const element = await page.find('icon-undo');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-undo > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-undo stroke-width="2"></icon-undo>');

    const element = await page.find('icon-undo');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-undo > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
