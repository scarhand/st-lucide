import { newE2EPage } from '@stencil/core/testing';

describe('icon-outdent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-outdent></icon-outdent>');

    const element = await page.find('icon-outdent');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-outdent stroke="blue"></icon-outdent>');

    const element = await page.find('icon-outdent');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-outdent > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-outdent stroke-width="2"></icon-outdent>');

    const element = await page.find('icon-outdent');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-outdent > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
