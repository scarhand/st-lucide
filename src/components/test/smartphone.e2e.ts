import { newE2EPage } from '@stencil/core/testing';

describe('icon-smartphone', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smartphone></icon-smartphone>');

    const element = await page.find('icon-smartphone');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smartphone stroke="blue"></icon-smartphone>');

    const element = await page.find('icon-smartphone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-smartphone > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-smartphone stroke-width="2"></icon-smartphone>');

    const element = await page.find('icon-smartphone');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-smartphone > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
