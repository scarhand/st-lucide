import { newE2EPage } from '@stencil/core/testing';

describe('icon-cast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cast></icon-cast>');

    const element = await page.find('icon-cast');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cast stroke="blue"></icon-cast>');

    const element = await page.find('icon-cast');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-cast > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-cast stroke-width="2"></icon-cast>');

    const element = await page.find('icon-cast');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-cast > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
