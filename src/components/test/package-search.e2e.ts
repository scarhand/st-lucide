import { newE2EPage } from '@stencil/core/testing';

describe('icon-package-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-search></icon-package-search>');

    const element = await page.find('icon-package-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-search stroke="blue"></icon-package-search>');

    const element = await page.find('icon-package-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-package-search > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-search stroke-width="2"></icon-package-search>');

    const element = await page.find('icon-package-search');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-package-search > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
