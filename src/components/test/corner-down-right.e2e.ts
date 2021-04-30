import { newE2EPage } from '@stencil/core/testing';

describe('icon-corner-down-right', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-down-right></icon-corner-down-right>');

    const element = await page.find('icon-corner-down-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-down-right stroke="blue"></icon-corner-down-right>');

    const element = await page.find('icon-corner-down-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-corner-down-right > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-corner-down-right stroke-width="2"></icon-corner-down-right>');

    const element = await page.find('icon-corner-down-right');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-corner-down-right > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
