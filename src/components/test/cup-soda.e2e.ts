import { newE2EPage } from '@stencil/core/testing';

describe('icon-cup-soda', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cup-soda></icon-cup-soda>');

    const element = await page.find('icon-cup-soda');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cup-soda stroke="blue"></icon-cup-soda>');

    const element = await page.find('icon-cup-soda');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cup-soda > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cup-soda stroke-width="2"></icon-cup-soda>');

    const element = await page.find('icon-cup-soda');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cup-soda > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
