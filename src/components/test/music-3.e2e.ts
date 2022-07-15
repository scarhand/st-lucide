import { newE2EPage } from '@stencil/core/testing';

describe('icon-music-3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music-3></icon-music-3>');

    const element = await page.find('icon-music-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music-3 stroke="blue"></icon-music-3>');

    const element = await page.find('icon-music-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-music-3 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music-3 stroke-width="2"></icon-music-3>');

    const element = await page.find('icon-music-3');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-music-3 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
