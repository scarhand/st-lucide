import { newE2EPage } from '@stencil/core/testing';

describe('icon-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-link></icon-link>');

    const element = await page.find('icon-link');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-link stroke="blue"></icon-link>');

    const element = await page.find('icon-link');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-link > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-link stroke-width="2"></icon-link>');

    const element = await page.find('icon-link');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-link > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
