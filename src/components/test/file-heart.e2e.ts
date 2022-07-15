import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-heart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-heart></icon-file-heart>');

    const element = await page.find('icon-file-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-heart stroke="blue"></icon-file-heart>');

    const element = await page.find('icon-file-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-heart > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-heart stroke-width="2"></icon-file-heart>');

    const element = await page.find('icon-file-heart');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-heart > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
