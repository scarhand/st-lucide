import { newE2EPage } from '@stencil/core/testing';

describe('icon-armchair', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-armchair></icon-armchair>');

    const element = await page.find('icon-armchair');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-armchair stroke="blue"></icon-armchair>');

    const element = await page.find('icon-armchair');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-armchair > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-armchair stroke-width="2"></icon-armchair>');

    const element = await page.find('icon-armchair');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-armchair > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
