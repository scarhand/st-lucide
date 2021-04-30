import { newE2EPage } from '@stencil/core/testing';

describe('icon-play-circle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-play-circle></icon-play-circle>');

    const element = await page.find('icon-play-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-feather-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-play-circle stroke="blue"></icon-play-circle>');

    const element = await page.find('icon-play-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-play-circle > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-play-circle stroke-width="2"></icon-play-circle>');

    const element = await page.find('icon-play-circle');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-play-circle > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
