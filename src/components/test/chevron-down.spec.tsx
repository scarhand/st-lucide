import { newE2EPage } from '@stencil/core/testing';

describe('icon-chevron-down', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-down></icon-chevron-down>');

    const element = await page.find('icon-chevron-down');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-down stroke="blue"></icon-chevron-down>');

    const element = await page.find('icon-chevron-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-chevron-down > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-chevron-down stroke-width="2"></icon-chevron-down>');

    const element = await page.find('icon-chevron-down');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-chevron-down > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
