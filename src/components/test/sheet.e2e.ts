import { newE2EPage } from '@stencil/core/testing';

describe('icon-sheet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sheet></icon-sheet>');

    const element = await page.find('icon-sheet');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sheet stroke="blue"></icon-sheet>');

    const element = await page.find('icon-sheet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-sheet > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-sheet stroke-width="2"></icon-sheet>');

    const element = await page.find('icon-sheet');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-sheet > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
