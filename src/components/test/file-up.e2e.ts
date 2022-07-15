import { newE2EPage } from '@stencil/core/testing';

describe('icon-file-up', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-up></icon-file-up>');

    const element = await page.find('icon-file-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('st-lucide-icon');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-up stroke="blue"></icon-file-up>');

    const element = await page.find('icon-file-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-file-up > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-file-up stroke-width="2"></icon-file-up>');

    const element = await page.find('icon-file-up');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-file-up > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});
