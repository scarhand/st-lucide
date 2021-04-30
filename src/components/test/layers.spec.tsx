import { newE2EPage } from '@stencil/core/testing';

describe('icon-layers', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layers></icon-layers>');

    const element = await page.find('icon-layers');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layers stroke="blue"></icon-layers>');

    const element = await page.find('icon-layers');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-layers > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-layers stroke-width="2"></icon-layers>');

    const element = await page.find('icon-layers');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-layers > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
