import { newE2EPage } from '@stencil/core/testing';

describe('icon-refresh-cw', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-refresh-cw></icon-refresh-cw>');

    const element = await page.find('icon-refresh-cw');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-refresh-cw stroke="blue"></icon-refresh-cw>');

    const element = await page.find('icon-refresh-cw');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-refresh-cw > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-refresh-cw stroke-width="2"></icon-refresh-cw>');

    const element = await page.find('icon-refresh-cw');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-refresh-cw > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
