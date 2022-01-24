import { newE2EPage } from '@stencil/core/testing';

describe('icon-gem', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gem></icon-gem>');

    const element = await page.find('icon-gem');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gem stroke="blue"></icon-gem>');

    const element = await page.find('icon-gem');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-gem > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-gem stroke-width="2"></icon-gem>');

    const element = await page.find('icon-gem');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-gem > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
