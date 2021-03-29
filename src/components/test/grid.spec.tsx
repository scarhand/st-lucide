import { newE2EPage } from '@stencil/core/testing';

describe('icon-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grid></icon-grid>');

    const element = await page.find('icon-grid');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grid stroke="blue"></icon-grid>');

    const element = await page.find('icon-grid');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-grid > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-grid stroke-width="2"></icon-grid>');

    const element = await page.find('icon-grid');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-grid > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
