import { newE2EPage } from '@stencil/core/testing';

describe('icon-package-plus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-plus></icon-package-plus>');

    const element = await page.find('icon-package-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-plus stroke="blue"></icon-package-plus>');

    const element = await page.find('icon-package-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-package-plus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-plus stroke-width="2"></icon-package-plus>');

    const element = await page.find('icon-package-plus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-package-plus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
