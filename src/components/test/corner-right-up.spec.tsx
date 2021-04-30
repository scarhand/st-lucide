import { newE2EPage } from '@stencil/core/testing';

describe('icon-corner-right-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-right-up></icon-corner-right-up>');

    const element = await page.find('icon-corner-right-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-right-up stroke="blue"></icon-corner-right-up>');

    const element = await page.find('icon-corner-right-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-corner-right-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-right-up stroke-width="2"></icon-corner-right-up>');

    const element = await page.find('icon-corner-right-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-corner-right-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
