import { newE2EPage } from '@stencil/core/testing';

describe('icon-mouse-pointer-click', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse-pointer-click></icon-mouse-pointer-click>');

    const element = await page.find('icon-mouse-pointer-click');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse-pointer-click stroke="blue"></icon-mouse-pointer-click>');

    const element = await page.find('icon-mouse-pointer-click');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mouse-pointer-click > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mouse-pointer-click stroke-width="2"></icon-mouse-pointer-click>');

    const element = await page.find('icon-mouse-pointer-click');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mouse-pointer-click > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
