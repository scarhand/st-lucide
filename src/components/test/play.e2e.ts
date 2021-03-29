import { newE2EPage } from '@stencil/core/testing';

describe('icon-play', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-play></icon-play>');

    const element = await page.find('icon-play');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-play stroke="blue"></icon-play>');

    const element = await page.find('icon-play');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-play > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-play stroke-width="2"></icon-play>');

    const element = await page.find('icon-play');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-play > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
