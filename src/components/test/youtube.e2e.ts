import { newE2EPage } from '@stencil/core/testing';

describe('icon-youtube', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-youtube></icon-youtube>');

    const element = await page.find('icon-youtube');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-youtube stroke="blue"></icon-youtube>');

    const element = await page.find('icon-youtube');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-youtube > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-youtube stroke-width="2"></icon-youtube>');

    const element = await page.find('icon-youtube');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-youtube > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
