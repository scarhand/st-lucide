import { newE2EPage } from '@stencil/core/testing';

describe('icon-equal-not', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-equal-not></icon-equal-not>');

    const element = await page.find('icon-equal-not');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-equal-not stroke="blue"></icon-equal-not>');

    const element = await page.find('icon-equal-not');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-equal-not > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-equal-not stroke-width="2"></icon-equal-not>');

    const element = await page.find('icon-equal-not');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-equal-not > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
