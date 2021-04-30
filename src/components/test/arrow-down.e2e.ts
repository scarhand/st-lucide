import { newE2EPage } from '@stencil/core/testing';

describe('icon-arrow-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down></icon-arrow-down>');

    const element = await page.find('icon-arrow-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down stroke="blue"></icon-arrow-down>');

    const element = await page.find('icon-arrow-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-arrow-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-arrow-down stroke-width="2"></icon-arrow-down>');

    const element = await page.find('icon-arrow-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-arrow-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
