import { newE2EPage } from '@stencil/core/testing';

describe('icon-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-box></icon-box>');

    const element = await page.find('icon-box');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-box stroke="blue"></icon-box>');

    const element = await page.find('icon-box');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-box > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-box stroke-width="2"></icon-box>');

    const element = await page.find('icon-box');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-box > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
