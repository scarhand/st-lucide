import { newE2EPage } from '@stencil/core/testing';

describe('icon-refresh-ccw', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-refresh-ccw></icon-refresh-ccw>');

    const element = await page.find('icon-refresh-ccw');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-refresh-ccw stroke="blue"></icon-refresh-ccw>');

    const element = await page.find('icon-refresh-ccw');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-refresh-ccw > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-refresh-ccw stroke-width="2"></icon-refresh-ccw>');

    const element = await page.find('icon-refresh-ccw');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-refresh-ccw > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
