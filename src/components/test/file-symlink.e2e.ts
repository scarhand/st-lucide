import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-symlink', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-symlink></icon-file-symlink>');

    const element = await page.find('icon-file-symlink');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-symlink stroke="blue"></icon-file-symlink>');

    const element = await page.find('icon-file-symlink');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-symlink > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-symlink stroke-width="2"></icon-file-symlink>');

    const element = await page.find('icon-file-symlink');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-symlink > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
