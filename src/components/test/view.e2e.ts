import { newE2EPage } from '@stencil/core/testing';

describe('icon-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-view></icon-view>');

    const element = await page.find('icon-view');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-view stroke="blue"></icon-view>');

    const element = await page.find('icon-view');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-view > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-view stroke-width="2"></icon-view>');

    const element = await page.find('icon-view');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-view > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
