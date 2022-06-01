import { newE2EPage } from '@stencil/core/testing';

describe('icon-package-minus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-minus></icon-package-minus>');

    const element = await page.find('icon-package-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-minus stroke="blue"></icon-package-minus>');

    const element = await page.find('icon-package-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-package-minus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-minus stroke-width="2"></icon-package-minus>');

    const element = await page.find('icon-package-minus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-package-minus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
