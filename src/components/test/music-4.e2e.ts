import { newE2EPage } from '@stencil/core/testing';

describe('icon-music-4', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music-4></icon-music-4>');

    const element = await page.find('icon-music-4');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music-4 stroke="blue"></icon-music-4>');

    const element = await page.find('icon-music-4');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-music-4 > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-music-4 stroke-width="2"></icon-music-4>');

    const element = await page.find('icon-music-4');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-music-4 > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
