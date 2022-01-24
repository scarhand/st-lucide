import { newE2EPage } from '@stencil/core/testing';

describe('icon-network', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-network></icon-network>');

    const element = await page.find('icon-network');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-network stroke="blue"></icon-network>');

    const element = await page.find('icon-network');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-network > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-network stroke-width="2"></icon-network>');

    const element = await page.find('icon-network');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-network > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
