import { newE2EPage } from '@stencil/core/testing';

describe('icon-alert-octagon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-octagon></icon-alert-octagon>');

    const element = await page.find('icon-alert-octagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-octagon stroke="blue"></icon-alert-octagon>');

    const element = await page.find('icon-alert-octagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-alert-octagon > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-alert-octagon stroke-width="2"></icon-alert-octagon>');

    const element = await page.find('icon-alert-octagon');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-alert-octagon > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
