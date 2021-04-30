import { newE2EPage } from '@stencil/core/testing';

describe('icon-printer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-printer></icon-printer>');

    const element = await page.find('icon-printer');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-printer stroke="blue"></icon-printer>');

    const element = await page.find('icon-printer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-printer > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-printer stroke-width="2"></icon-printer>');

    const element = await page.find('icon-printer');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-printer > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
