import { newE2EPage } from '@stencil/core/testing';

describe('icon-circle-slashed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-slashed></icon-circle-slashed>');

    const element = await page.find('icon-circle-slashed');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-slashed stroke="blue"></icon-circle-slashed>');

    const element = await page.find('icon-circle-slashed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-circle-slashed > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-circle-slashed stroke-width="2"></icon-circle-slashed>');

    const element = await page.find('icon-circle-slashed');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-circle-slashed > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
