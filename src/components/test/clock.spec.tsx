import { newE2EPage } from '@stencil/core/testing';

describe('icon-clock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock></icon-clock>');

    const element = await page.find('icon-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock stroke="blue"></icon-clock>');

    const element = await page.find('icon-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-clock > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-clock stroke-width="2"></icon-clock>');

    const element = await page.find('icon-clock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-clock > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
