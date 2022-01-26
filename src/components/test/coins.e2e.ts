import { newE2EPage } from '@stencil/core/testing';

describe('icon-coins', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-coins></icon-coins>');

    const element = await page.find('icon-coins');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-coins stroke="blue"></icon-coins>');

    const element = await page.find('icon-coins');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-coins > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-coins stroke-width="2"></icon-coins>');

    const element = await page.find('icon-coins');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-coins > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
