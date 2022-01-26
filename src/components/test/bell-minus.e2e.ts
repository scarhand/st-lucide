import { newE2EPage } from '@stencil/core/testing';

describe('icon-bell-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-minus></icon-bell-minus>');

    const element = await page.find('icon-bell-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-minus stroke="blue"></icon-bell-minus>');

    const element = await page.find('icon-bell-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-bell-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-bell-minus stroke-width="2"></icon-bell-minus>');

    const element = await page.find('icon-bell-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-bell-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
