import { newE2EPage } from '@stencil/core/testing';

describe('icon-package-check', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-check></icon-package-check>');

    const element = await page.find('icon-package-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-check stroke="blue"></icon-package-check>');

    const element = await page.find('icon-package-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-package-check > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package-check stroke-width="2"></icon-package-check>');

    const element = await page.find('icon-package-check');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-package-check > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
