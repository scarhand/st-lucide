import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-lock', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-lock></icon-file-lock>');

    const element = await page.find('icon-file-lock');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-lock stroke="blue"></icon-file-lock>');

    const element = await page.find('icon-file-lock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-lock > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-lock stroke-width="2"></icon-file-lock>');

    const element = await page.find('icon-file-lock');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-lock > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
