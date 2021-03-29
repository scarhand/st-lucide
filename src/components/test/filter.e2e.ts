import { newE2EPage } from '@stencil/core/testing';

describe('icon-filter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-filter></icon-filter>');

    const element = await page.find('icon-filter');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-filter stroke="blue"></icon-filter>');

    const element = await page.find('icon-filter');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-filter > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-filter stroke-width="2"></icon-filter>');

    const element = await page.find('icon-filter');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-filter > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
