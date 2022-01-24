import { newE2EPage } from '@stencil/core/testing';

describe('icon-egg', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-egg></icon-egg>');

    const element = await page.find('icon-egg');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-egg stroke="blue"></icon-egg>');

    const element = await page.find('icon-egg');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-egg > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-egg stroke-width="2"></icon-egg>');

    const element = await page.find('icon-egg');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-egg > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
