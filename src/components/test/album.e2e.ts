import { newE2EPage } from '@stencil/core/testing';

describe('icon-album', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-album></icon-album>');

    const element = await page.find('icon-album');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-album stroke="blue"></icon-album>');

    const element = await page.find('icon-album');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-album > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-album stroke-width="2"></icon-album>');

    const element = await page.find('icon-album');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-album > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
