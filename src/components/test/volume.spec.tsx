import { newE2EPage } from '@stencil/core/testing';

describe('icon-volume', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-volume></icon-volume>');

    const element = await page.find('icon-volume');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-volume stroke="blue"></icon-volume>');

    const element = await page.find('icon-volume');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-volume > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-volume stroke-width="2"></icon-volume>');

    const element = await page.find('icon-volume');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-volume > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
