import { newE2EPage } from '@stencil/core/testing';

describe('icon-navigation-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-navigation-off></icon-navigation-off>');

    const element = await page.find('icon-navigation-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-navigation-off stroke="blue"></icon-navigation-off>');

    const element = await page.find('icon-navigation-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-navigation-off > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-navigation-off stroke-width="2"></icon-navigation-off>');

    const element = await page.find('icon-navigation-off');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-navigation-off > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
