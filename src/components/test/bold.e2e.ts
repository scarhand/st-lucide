import { newE2EPage } from '@stencil/core/testing';

describe('icon-bold', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bold></icon-bold>');

    const element = await page.find('icon-bold');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bold stroke="blue"></icon-bold>');

    const element = await page.find('icon-bold');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bold > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bold stroke-width="2"></icon-bold>');

    const element = await page.find('icon-bold');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bold > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
