import { newE2EPage } from '@stencil/core/testing';

describe('icon-focus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-focus></icon-focus>');

    const element = await page.find('icon-focus');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-focus stroke="blue"></icon-focus>');

    const element = await page.find('icon-focus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-focus > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-focus stroke-width="2"></icon-focus>');

    const element = await page.find('icon-focus');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-focus > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
