import { newE2EPage } from '@stencil/core/testing';

describe('icon-package', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package></icon-package>');

    const element = await page.find('icon-package');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package stroke="blue"></icon-package>');

    const element = await page.find('icon-package');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-package > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-package stroke-width="2"></icon-package>');

    const element = await page.find('icon-package');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-package > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
