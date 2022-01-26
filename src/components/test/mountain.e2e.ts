import { newE2EPage } from '@stencil/core/testing';

describe('icon-mountain', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mountain></icon-mountain>');

    const element = await page.find('icon-mountain');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mountain stroke="blue"></icon-mountain>');

    const element = await page.find('icon-mountain');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-mountain > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-mountain stroke-width="2"></icon-mountain>');

    const element = await page.find('icon-mountain');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-mountain > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
