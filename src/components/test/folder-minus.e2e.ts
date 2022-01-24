import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-minus></icon-folder-minus>');

    const element = await page.find('icon-folder-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-minus stroke="blue"></icon-folder-minus>');

    const element = await page.find('icon-folder-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-minus stroke-width="2"></icon-folder-minus>');

    const element = await page.find('icon-folder-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
