import { newE2EPage } from '@stencil/core/testing';

describe('icon-folder-heart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-heart></icon-folder-heart>');

    const element = await page.find('icon-folder-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-heart stroke="blue"></icon-folder-heart>');

    const element = await page.find('icon-folder-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-folder-heart > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-folder-heart stroke-width="2"></icon-folder-heart>');

    const element = await page.find('icon-folder-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-folder-heart > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
