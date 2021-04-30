import { newE2EPage } from '@stencil/core/testing';

describe('icon-life-buoy', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-life-buoy></icon-life-buoy>');

    const element = await page.find('icon-life-buoy');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-life-buoy stroke="blue"></icon-life-buoy>');

    const element = await page.find('icon-life-buoy');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-life-buoy > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-life-buoy stroke-width="2"></icon-life-buoy>');

    const element = await page.find('icon-life-buoy');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-life-buoy > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
