import { newE2EPage } from '@stencil/core/testing';

describe('icon-check-square', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check-square></icon-check-square>');

    const element = await page.find('icon-check-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check-square stroke="blue"></icon-check-square>');

    const element = await page.find('icon-check-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-check-square > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-check-square stroke-width="2"></icon-check-square>');

    const element = await page.find('icon-check-square');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-check-square > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
