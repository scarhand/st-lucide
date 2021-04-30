import { newE2EPage } from '@stencil/core/testing';

describe('icon-tv', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tv></icon-tv>');

    const element = await page.find('icon-tv');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tv stroke="blue"></icon-tv>');

    const element = await page.find('icon-tv');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-tv > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-tv stroke-width="2"></icon-tv>');

    const element = await page.find('icon-tv');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-tv > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
